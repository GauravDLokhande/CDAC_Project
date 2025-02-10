package com.elearning.services;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.CourseDAO;
import com.elearning.dao.EnrollmentDAO;
import com.elearning.dao.ModuleDao;
import com.elearning.dao.UserDAO;
import com.elearning.dtos.CourseResponseDTO;
import com.elearning.pojos.Courses;
import com.elearning.pojos.Users;

import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
@Service
@Transactional
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDAO courseDAO;
	
	@Autowired
	private ModelMapper modelmapper;
	
	
	@Autowired
	private ModuleDao moduleDao;
	
	@Autowired
	private UserDAO userDao;
	

	private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yy");

	
	@Override
	public List<CourseResponseDTO> getCourseDetails() {
		
		return courseDAO.findAll()
				.stream().
				map(course -> modelmapper.map(course, CourseResponseDTO.class))
				.collect(Collectors.toList());
	}	
	


    public List<CourseResponseDTO> getCoursesByInstructor(Long instructorId) {
        Users instructor = userDao.findById(instructorId)
            .orElseThrow(() -> new RuntimeException("Instructor not found"));
        List<Courses> courses = courseDAO.findByInstructor(instructor);

        return courses.stream().map(course -> {
            int moduleCount = moduleDao.countModulesByCourseId(course.getCourseId());
            int studentCount = courseDAO.countStudentsByCourseId(course.getCourseId());
            String status = course.isStatus() ? "Completed" : "Ongoing"; // Assuming Status is a boolean field

            String lastUpdated = course.getUpdatedOn().format(DATE_FORMATTER); // Replace with actual logic to get last updated date
            
            CourseResponseDTO dto = new CourseResponseDTO(
                course.getCourseId(),
                course.getCourseName(),
                moduleCount,
                studentCount,
                status,
                lastUpdated,
                course.getCourseDesc(),
                course.getCourseImageUrl()
            );
            return dto;
        }).collect(Collectors.toList());
    }	   
	   public int countStudentsByCourseId(Long courseId) {
	        return courseDAO.countStudentsByCourseId(courseId);
	    } 
	   
	
}
