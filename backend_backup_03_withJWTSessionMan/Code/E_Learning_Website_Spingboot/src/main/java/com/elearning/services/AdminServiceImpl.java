package com.elearning.services;

import com.elearning.dao.AdminDAO;
import com.elearning.dao.FakeInstructorDAO;
import com.elearning.dao.LessonDAO;
import com.elearning.dao.ModuleDAO;
import com.elearning.dao.UserDAO;
import com.elearning.dao.CourseDAO;
import com.elearning.dtos.AdminRequestDTO;
import com.elearning.dtos.AdminResponseDTO;
import com.elearning.dtos.CourseRequestDTO;
import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.UserRegPerMonResponseDTO;
import com.elearning.pojos.Courses;
import com.elearning.pojos.UserRole;
import com.elearning.pojos.Users;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
@Service
@Transactional
public class AdminServiceImpl implements AdminService{

	@Autowired
    private AdminDAO adminDAO;
	
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private CourseDAO courseDAO;
	
    @Autowired
    private ModuleDAO moduleDAO;

    @Autowired
    private LessonDAO lessonDAO;

//	public List<UserRegPerMonResponseDTO> getRegisteredUserCountsPerMonth() {
//        return adminDAO.getUserCountPerMonth();
//    }
    
    // get count of registered users per month
    @Override
    public Map<String, Long> getUserRegistrationCountPerMonth() {
        List<Object[]> results = userDAO.getUserRegistrationCountPerMonth();
        Map<String, Long> monthlyCounts = new HashMap<>();

        for (Object[] row : results) {
            Integer year = (Integer) row[0];
            Integer month = (Integer) row[1];
            Long count = (Long) row[2];

            String key = year + "-" + String.format("%02d", month); // Format as YYYY-MM
            monthlyCounts.put(key, count);
        }
        return monthlyCounts;
    }

	// get count of students enrolled per month
    public List<AdminResponseDTO> getEnrolledUserCountPerCourse() {
        return adminDAO.getEnrolledUserCountPerCourse();
    }
    
    // get list of students
    public List<AdminResponseDTO> getAllStudents() {
        return userDAO.findByRole(UserRole.ROLE_STUDENT)
                .stream()
                .map(user -> {
                    AdminResponseDTO dto = new AdminResponseDTO();
                    dto.setUserId(user.getUserId());
                    dto.setUsername(user.getUsername());
                    dto.setEmail(user.getEmail());
                    dto.setContactInfo(user.getContactInfo());
                    dto.setCreatedOn(user.getCreatedOn());   // Set createdOn field
                    dto.setUpdatedOn(user.getUpdatedOn());   // Set updatedOn field
                    return dto;
                })
                .collect(Collectors.toList());
    }
    
    // get the list of instructors
    public List<AdminResponseDTO> getAllInstructors() {
        return userDAO.findByRole(UserRole.ROLE_INSTRUCTOR)
                .stream()
                .map(user -> {
                    AdminResponseDTO dto = new AdminResponseDTO();
                    dto.setUserId(user.getUserId());
                    dto.setUsername(user.getUsername());
                    dto.setEmail(user.getEmail());
                    dto.setContactInfo(user.getContactInfo());
                    dto.setCreatedOn(user.getCreatedOn());   // Set createdOn field
                    dto.setUpdatedOn(user.getUpdatedOn());   // Set updatedOn field
                    return dto;
                })
                .collect(Collectors.toList());
    }
    
    // get the list of courses
    public List<CourseResponseDTO> getAllCourses() {
        return courseDAO.findAll()
                .stream()
                .map(course -> {
                    CourseResponseDTO dto = new CourseResponseDTO();
                    dto.setCourseId(course.getCourseId());
                    dto.setCourseName(course.getCourseName());
                    dto.setCourseDesc(course.getCourseDesc());
                    dto.setInstructorName(course.getInstructor() != null ? course.getInstructor().getUsername() : "No Instructor");
                    dto.setCreatedOn(course.getCreatedOn());   // Set createdOn field
                    dto.setUpdatedOn(course.getUpdatedOn());   // Set updatedOn field
                    return dto;
                })
                .collect(Collectors.toList());
    }

    
	// add a course and assign instructor to it
    public String addCourse(CourseRequestDTO courseDTO) {
        // Fetch instructor by ID
        Users instructor = userDAO.findById(courseDTO.getInstructorId())
                .filter(user -> user.getRole() == UserRole.ROLE_INSTRUCTOR) // Ensure user is an instructor
                .orElseThrow(() -> new RuntimeException("Instructor not found or invalid role"));

        // Create new Course entity
        Courses course = new Courses();
        course.setCourseName(courseDTO.getCourseName());
        course.setCourseDesc(courseDTO.getCourseDesc());
        course.setInstructor(instructor); // Assign instructor

        // Save course
        courseDAO.save(course);
        return "Course added successfully!";
    }
    
    // soft delete a user
    @Override
    public String softDeleteUser(Long userId) {
        Users user = userDAO.findByUserIdAndStatusFalse(userId)
            .orElseThrow(() -> new RuntimeException("User not found or already deleted"));

        user.setStatus(true); // Soft delete
        userDAO.save(user);
        return "User (ID: " + userId + ") has been deleted successfully.";
    }
    
	
	// soft delete a course
	public String softDeleteCourse(Long courseId) {
        Courses course = courseDAO.findByCourseIdAndStatusFalse(courseId)
            .orElseThrow(() -> new RuntimeException("Course not found or already deleted"));
        
        course.setStatus(true); // Mark course as deleted
        courseDAO.save(course);
        return "Course soft deleted successfully.";
    }
	
	// get count of values
	@Override
    public Map<String, Long> getCounts() {
        Map<String, Long> counts = new HashMap<>();

        counts.put("totalStudents", userDAO.countByRoleAndStatus(UserRole.ROLE_STUDENT, false));
        counts.put("totalInstructors", userDAO.countByRoleAndStatus(UserRole.ROLE_INSTRUCTOR, false));
        counts.put("totalCourses", courseDAO.countByStatus(false));
        counts.put("totalModules", moduleDAO.count());
        counts.put("totalLessons", lessonDAO.count());

        return counts;
    }
}
