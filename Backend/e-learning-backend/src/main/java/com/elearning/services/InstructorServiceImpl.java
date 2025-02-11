package com.elearning.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.CourseDAO;
import com.elearning.dao.InstructorDAO;
import com.elearning.dao.ModuleDAO;
import com.elearning.dtos.InstructorResponseDTO;
import com.elearning.dtos.ModuleRequestDto;
import com.elearning.pojos.Courses;
import com.elearning.pojos.Modules;
import com.elearning.pojos.Users;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class InstructorServiceImpl implements InstructorService {

	    @Autowired
	    private InstructorDAO instructorDAO;
	    
	    @Autowired
	    private ModuleDAO moduleDao;
	    
	    @Autowired
	    private CourseDAO courseDao;

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
	    
		
		public String addModule(ModuleRequestDto moduleRequestDto) {
		    // Retrieve the Course object by courseId
		    Courses course = courseDao.findById(moduleRequestDto.getCourseId())
		            .orElseThrow(() -> new RuntimeException("Course not found with ID: " + moduleRequestDto.getCourseId()));

		    // Create a new Module entity from the DTO
		    Modules module = new Modules();
		    module.setModuleName(moduleRequestDto.getModuleName());
		    module.setModuleDescription(moduleRequestDto.getModuleDescription());
		    module.setModuleCourse(course);  // Set the Courses object, not just the courseId
		    
		    // Save the module to the database
		    moduleDao.save(module);
		    
		    return "Module Added Successfullly";
		}

		
		public String deleteModule(Long moduleId) {
	        // Check if the module exists
	        Modules module = moduleDao.findById(moduleId)
	                .orElseThrow(() -> new RuntimeException("Module not found with ID: " + moduleId));
	        
	        // Delete the module
	        moduleDao.delete(module);
	        
	        return "Module deleted successfully";
	    }
}
