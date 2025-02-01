package com.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.dtos.ApiResponse;
import com.elearning.dtos.LessonReqDto;
import com.elearning.dtos.LessonUpdateDto;
import com.elearning.dtos.ModuleReqDto;
import com.elearning.dtos.ModuleUpdateDto;
import com.elearning.pojos.Lessons;
import com.elearning.services.InstructorService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/instructors")
public class InstructorController {

	@Autowired
	private InstructorService instructorService;
	
	
	
	
	
	
//	 // Fetch all modules and their associated courses
//    @GetMapping("/modules")
//    public ResponseEntity<?> getAllModules() {
//        try {
//            return ResponseEntity.status(HttpStatus.OK)
//                .body(instructorService.getAllModules());
//        } catch (RuntimeException e) {
//            return ResponseEntity
//                .status(HttpStatus.BAD_REQUEST)
//                .body(new ApiResponse(e.getMessage()));
//        }
//    }
	
	
	@GetMapping("/module/{moduleId}/lessons")
	public ResponseEntity<?> getLessonsByModule(@PathVariable Long moduleId) {
	    try {
	        List<Lessons> lessons = lessonService.getLessonsByModuleId(moduleId);
	        if (lessons.isEmpty()) {
	            return ResponseEntity
	                .status(HttpStatus.NOT_FOUND)
	                .body(new ApiResponse("No lessons found for module ID: " + moduleId));
	        }
	        return ResponseEntity.ok(lessons);
	    } catch (RuntimeException e) {
	        return ResponseEntity
	            .status(HttpStatus.BAD_REQUEST)
	            .body(new ApiResponse(e.getMessage()));
	    }
	}
    
    
 // Fetch modules by course ID
    @GetMapping("/course/{courseId}")
    public ResponseEntity<?> getModulesByCourse(@PathVariable Long courseId) {
        try {
            List<Modules> modules = moduleService.getModulesByCourseId(courseId);
            if (modules.isEmpty()) {
                return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse("No modules found for course ID: " + courseId));
            }
            return ResponseEntity.ok(modules);
        } catch (RuntimeException e) {
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ApiResponse(e.getMessage()));
        }
	
	@PostMapping("modules")
	public ResponseEntity<?> postMethodName(@RequestBody ModuleReqDto moduleReqDto) {
			
		System.out.println("in add module" + moduleReqDto);
		try {
			return ResponseEntity.status(HttpStatus.CREATED)
			.body(instructorService.addNewModule(moduleReqDto));
		} catch (RuntimeException e) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
		}
		
		
		
	}
	
	  @PutMapping("/modules/{moduleId}")
	    public ResponseEntity<?> updateModule(
	            @PathVariable Long moduleId,
	            @RequestBody ModuleUpdateDto moduleUpdateDto) {
	        System.out.println("In update module: " + moduleUpdateDto);
	        try {
	            return ResponseEntity.status(HttpStatus.OK)
	                .body(instructorService.updateModule(moduleId, moduleUpdateDto));
	        } catch (RuntimeException e) {
	            return ResponseEntity
	                .status(HttpStatus.BAD_REQUEST)
	                .body(new ApiResponse(e.getMessage()));
	        }
	    }
	  
	  
	  @DeleteMapping("/modules/{moduleId}")
	  public ResponseEntity<?> deleteModule(@PathVariable Long moduleId) {
	      try {
	          return ResponseEntity.status(HttpStatus.OK)
	                  .body(instructorService.deleteModule(moduleId));
	      } catch (RuntimeException e) {
	          return ResponseEntity
	                  .status(HttpStatus.BAD_REQUEST)
	                  .body(new ApiResponse(e.getMessage()));
	      }
	  }
	  
	  
	  @PostMapping("lessons")
	    public ResponseEntity<?> addNewLesson(@RequestBody LessonReqDto lessonReqDto) {
	        try {
	            return ResponseEntity.status(HttpStatus.CREATED)
	                .body(instructorService.addNewLesson(lessonReqDto));
	        } catch (RuntimeException e) {
	            return ResponseEntity
	                .status(HttpStatus.BAD_REQUEST)
	                .body(new ApiResponse(e.getMessage()));
	        }
	    }
	  
	  
	  
	  // Update lesson
	    @PutMapping("/lessons/{lessonId}")
	    public ResponseEntity<?> updateLesson(
	            @PathVariable Long lessonId,
	            @RequestBody LessonUpdateDto lessonUpdateDto) {
	        try {
	            return ResponseEntity.status(HttpStatus.OK)
	                .body(instructorService.updateLesson(lessonId, lessonUpdateDto));
	        } catch (RuntimeException e) {
	            return ResponseEntity
	                .status(HttpStatus.BAD_REQUEST)
	                .body(new ApiResponse(e.getMessage()));
	        }
	    }

	    // Delete lesson
	    @DeleteMapping("/lessons/{lessonId}")
	    public ResponseEntity<?> deleteLesson(@PathVariable Long lessonId) {
	        try {
	            return ResponseEntity.status(HttpStatus.OK)
	                .body(instructorService.deleteLesson(lessonId));
	        } catch (RuntimeException e) {
	            return ResponseEntity
	                .status(HttpStatus.BAD_REQUEST)
	                .body(new ApiResponse(e.getMessage()));
	        }
	    }
	}
	  

	  
	  
	
	
	
	
	

