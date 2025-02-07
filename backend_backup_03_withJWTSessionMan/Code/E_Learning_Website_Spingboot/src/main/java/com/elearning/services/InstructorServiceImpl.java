package com.elearning.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.InstructorDAO;
import com.elearning.dtos.InstructorResponseDTO;
import com.elearning.pojos.Users;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class InstructorServiceImpl implements InstructorService {

	    @Autowired
	    private InstructorDAO instructorDAO;

	    public InstructorResponseDTO getInstructorByLessonId(Long lessonId) {
	        Users instructor = instructorDAO.findInstructorByLessonId(lessonId);
	        
	        if (instructor == null) {
	            throw new RuntimeException("Instructor not found for lessonId: " + lessonId);
	        }
	        
	        return new InstructorResponseDTO(
	                instructor.getUserId(),
	                instructor.getFirstName(),
	                instructor.getLastName(),
	                instructor.getDesignation(),
	                instructor.getBio(),
	                instructor.getProfilePic()
	        );
	    }
}
