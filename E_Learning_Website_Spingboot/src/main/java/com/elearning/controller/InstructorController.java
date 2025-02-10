package com.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.dtos.ApiResponse;
import com.elearning.dtos.CourseRespDto;
import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.ModuleRequestDto;
import com.elearning.pojos.Courses;
import com.elearning.services.CourseService;
import com.elearning.services.InstructorService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/instructors")
@CrossOrigin("*")
public class InstructorController {

	@Autowired
	private InstructorService instructorService;
	
	@Autowired
	private CourseService courseService;
	
	
//	// Fetch all courses assigned to an instructor
//	@GetMapping("/{instructorId}/courses")
//	public ResponseEntity<?> getAllCoursesByInstructor(@PathVariable Long instructorId) {
//	    try {
//	        List<CourseRespDto> courses = instructorService.getCoursesByInstructorId(instructorId);
//	        if (courses.isEmpty()) {
//	            return ResponseEntity
//	                .status(HttpStatus.NOT_FOUND)
//	                .body(new ApiResponse("No courses found for instructor ID: " + instructorId));
//	        }
//	        return ResponseEntity.ok(courses);
//	    } catch (RuntimeException e) {
//	        return ResponseEntity
//	            .status(HttpStatus.BAD_REQUEST)
//	            .body(new ApiResponse(e.getMessage()));
//	    }
//	}

	// Fetch a specific course assigned to an instructor
//	@GetMapping("/{instructorId}/courses/{courseId}")
//	public ResponseEntity<?> getCourseByInstructorAndCourseId(@PathVariable Long instructorId, @PathVariable Long courseId) {
//	    try {
//	        CourseRespDto course = instructorService.getCourseByInstructorAndCourseId(instructorId, courseId);
//	        return ResponseEntity.ok(course);
//	    } catch (RuntimeException e) {
//	        return ResponseEntity
//	            .status(HttpStatus.NOT_FOUND)
//	            .body(new ApiResponse(e.getMessage()));
//	    }
//	}

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
	    public List<CourseResponseDTO> getCoursesByInstructor(@PathVariable Long instructorId) {
	        return courseService.getCoursesByInstructor(instructorId); 
	    }
	    
}
	  
	
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
	
	
//	@GetMapping("/module/{moduleId}/lessons")
//	public ResponseEntity<?> getLessonsByModule(@PathVariable Long moduleId) {
//	    try {
//	        List<Lessons> lessons = lessonService.getLessonsByModuleId(moduleId);
//	        if (lessons.isEmpty()) {
//	            return ResponseEntity
//	                .status(HttpStatus.NOT_FOUND)
//	                .body(new ApiResponse("No lessons found for module ID: " + moduleId));
//	        }
//	        return ResponseEntity.ok(lessons);
//	    } catch (RuntimeException e) {
//	        return ResponseEntity
//	            .status(HttpStatus.BAD_REQUEST)
//	            .body(new ApiResponse(e.getMessage()));
//	    }
//	}
//    
//    
// // Fetch modules by course ID
//    @GetMapping("/course/{courseId}")
//    public ResponseEntity<?> getModulesByCourse(@PathVariable Long courseId) {
//        try {
//            List<Modules> modules = moduleService.getModulesByCourseId(courseId);
//            if (modules.isEmpty()) {
//                return ResponseEntity
//                    .status(HttpStatus.NOT_FOUND)
//                    .body(new ApiResponse("No modules found for course ID: " + courseId));
//            }
//            return ResponseEntity.ok(modules);
//        } catch (RuntimeException e) {
//            return ResponseEntity
//                .status(HttpStatus.BAD_REQUEST)
//                .body(new ApiResponse(e.getMessage()));
//        }
//	
//	@PostMapping("modules")
//	public ResponseEntity<?> postMethodName(@RequestBody ModuleReqDto moduleReqDto) {
//			
//		System.out.println("in add module" + moduleReqDto);
//		try {
//			return ResponseEntity.status(HttpStatus.CREATED)
//			.body(instructorService.addNewModule(moduleReqDto));
//		} catch (RuntimeException e) {
//			return ResponseEntity
//					.status(HttpStatus.BAD_REQUEST)
//					.body(new ApiResponse(e.getMessage()));
//		}
//		
//		
//		
//	}
//	
//	  @PutMapping("/modules/{moduleId}")
//	    public ResponseEntity<?> updateModule(
//	            @PathVariable Long moduleId,
//	            @RequestBody ModuleUpdateDto moduleUpdateDto) {
//	        System.out.println("In update module: " + moduleUpdateDto);
//	        try {
//	            return ResponseEntity.status(HttpStatus.OK)
//	                .body(instructorService.updateModule(moduleId, moduleUpdateDto));
//	        } catch (RuntimeException e) {
//	            return ResponseEntity
//	                .status(HttpStatus.BAD_REQUEST)
//	                .body(new ApiResponse(e.getMessage()));
//	        }
//	    }
//	  
//	  
//	  @DeleteMapping("/modules/{moduleId}")
//	  public ResponseEntity<?> deleteModule(@PathVariable Long moduleId) {
//	      try {
//	          return ResponseEntity.status(HttpStatus.OK)
//	                  .body(instructorService.deleteModule(moduleId));
//	      } catch (RuntimeException e) {
//	          return ResponseEntity
//	                  .status(HttpStatus.BAD_REQUEST)
//	                  .body(new ApiResponse(e.getMessage()));
//	      }
//	  }
//	  
//	  
//	  @PostMapping("lessons")
//	    public ResponseEntity<?> addNewLesson(@RequestBody LessonReqDto lessonReqDto) {
//	        try {
//	            return ResponseEntity.status(HttpStatus.CREATED)
//	                .body(instructorService.addNewLesson(lessonReqDto));
//	        } catch (RuntimeException e) {
//	            return ResponseEntity
//	                .status(HttpStatus.BAD_REQUEST)
//	                .body(new ApiResponse(e.getMessage()));
//	        }
//	    }
//	  
//	  
//	  
//	  // Update lesson
//	    @PutMapping("/lessons/{lessonId}")
//	    public ResponseEntity<?> updateLesson(
//	            @PathVariable Long lessonId,
//	            @RequestBody Lesson lessonUpdateDto) {
//	        try {
//	            return ResponseEntity.status(HttpStatus.OK)
//	                .body(instructorService.updateLesson(lessonId, lessonUpdateDto));
//	        } catch (RuntimeException e) {
//	            return ResponseEntity
//	                .status(HttpStatus.BAD_REQUEST)
//	                .body(new ApiResponse(e.getMessage()));
//	        }
//	    }
//
//	    // Delete lesson
//	    @DeleteMapping("/lessons/{lessonId}")
//	    public ResponseEntity<?> deleteLesson(@PathVariable Long lessonId) {
//	        try {
//	            return ResponseEntity.status(HttpStatus.OK)
//	                .body(instructorService.deleteLesson(lessonId));
//	        } catch (RuntimeException e) {
//	            return ResponseEntity
//	                .status(HttpStatus.BAD_REQUEST)
//	                .body(new ApiResponse(e.getMessage()));
//	        }
//	    }
//	} 

	  
	  
	
	
	
	
	

