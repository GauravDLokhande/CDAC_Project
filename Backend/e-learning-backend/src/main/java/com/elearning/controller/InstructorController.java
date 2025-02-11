package com.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.CourseResponseInst;
import com.elearning.dtos.InstructorResponseDTO;
import com.elearning.dtos.ModuleRequestDto;
import com.elearning.services.CourseService;
import com.elearning.services.InstructorService;

@RestController
@RequestMapping("/instructors")
@CrossOrigin(origins = "http://localhost:5173/")
public class InstructorController {

    @Autowired
    private InstructorService instructorService;
    
    @Autowired
    private CourseService courseService;

    @GetMapping("/lessons/{lessonId}")
    public InstructorResponseDTO getInstructorByLessonId(@PathVariable Long lessonId) {
        return instructorService.getInstructorByLessonId(lessonId);
    }
    
	 @PostMapping("/add-module")  // This will map to POST /api/modules/add
	    public ResponseEntity<String> addModule(@RequestBody ModuleRequestDto moduleRequestDto) {
	        // Call service method to add the module
		 
		 System.out.println(moduleRequestDto.getModuleDescription());
		 System.out.println(moduleRequestDto.getModuleName());
		 
	        String response = instructorService.addModule(moduleRequestDto);
	        
	        // Return the success message in the response body
	        return new ResponseEntity<>(response, HttpStatus.CREATED);  // 201 - Created
	    }
	
	
	 @DeleteMapping("/delete/{id}")  
	    public ResponseEntity<String> deleteModule(@PathVariable Long id) {
	        // Call service method to delete the module
	        String response = instructorService.deleteModule(id);
	        
	        // Return a success message
	        return new ResponseEntity<>(response, HttpStatus.OK);  // 200 - OK
	    }
	 
	 

	    @GetMapping("/instructorcourses/{instructorId}")
	    public List<CourseResponseInst> getCoursesByInstructor(@PathVariable Long instructorId) {
	        return courseService.getCoursesByInstructor(instructorId); 
	    }
}
