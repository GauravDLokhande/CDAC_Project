package com.elearning.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.AdminDAO;
import com.elearning.dao.CourseDAO;
import com.elearning.dao.FakeInstructorDAO;
import com.elearning.dtos.AdminRequestDTO;
import com.elearning.pojos.Courses;
import com.elearning.pojos.UserRole;
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
public class FakeInstructorServiceImpl implements FakeInstructorService {

	@Autowired
    private FakeInstructorDAO fakeInstructorDAO;
	
	@Autowired
    private CourseDAO courseDAO;
	
	public String addInstructorAndAssignCourse(AdminRequestDTO requestDTO) {
        // Check if instructor already exists
        Users existingInstructor = fakeInstructorDAO.findByEmail(requestDTO.getEmail());
        if (existingInstructor != null) {
            throw new RuntimeException("Instructor with email " + requestDTO.getEmail() + " already exists.");
        }

        // Create new instructor
        Users newInstructor = new Users();
        newInstructor.setFirstName(requestDTO.getFirstName());
        newInstructor.setLastName(requestDTO.getLastName());
        newInstructor.setEmail(requestDTO.getEmail());
        newInstructor.setPassword(requestDTO.getPassword());
        newInstructor.setDesignation(requestDTO.getDesignation());
        newInstructor.setBio(requestDTO.getBio());
        newInstructor.setProfilePic(requestDTO.getProfilePic());
        newInstructor.setRole(UserRole.ROLE_INSTRUCTOR); // Assign role

        Users savedInstructor = fakeInstructorDAO.save(newInstructor);

        // Assign course to instructor
        Courses course = courseDAO.findById(requestDTO.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found with ID: " + requestDTO.getCourseId()));

        course.setInstructor(savedInstructor);
        courseDAO.save(course);

        return "Instructor Added Successfully";
    }
}
