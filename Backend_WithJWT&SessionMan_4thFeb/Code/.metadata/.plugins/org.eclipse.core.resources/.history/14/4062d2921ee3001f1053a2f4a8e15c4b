package com.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.dtos.CourseProgressDTO;
import com.elearning.dtos.EnrollmentResponseDTO;
import com.elearning.dtos.ModuleResponseDTO;
import com.elearning.services.EnrollmentService;

@RestController
@RequestMapping("/enrollments")
public class EnrollmentController {
	
	@Autowired
	private EnrollmentService enrollService;

	@GetMapping("/{studentId}")
	public ResponseEntity<?> getEnrolledCourses(@PathVariable Long studentId) {
		  List<EnrollmentResponseDTO> courseNames = enrollService.getEnrollCourse(studentId);
		  if(courseNames.isEmpty())
		  {
			  return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		  }
		  else
		  {
			  return ResponseEntity.ok(courseNames);
		  }
	}
	
	@GetMapping("/progress/{studentId}")
	public ResponseEntity<?> getCourseProgress(@PathVariable Long studentId) {
		  List<CourseProgressDTO> courseProgress = enrollService.getCourseProgressByStudentId(studentId);
		  if(courseProgress.isEmpty())
		  {
			  return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		  }
		  else
		  {
			  return ResponseEntity.ok(courseProgress);
		  }
	}
	
	@GetMapping("/modules/{courseId}")
    public ResponseEntity<?> getModules(@PathVariable Long courseId) {
        return ResponseEntity.ok(enrollService.getModulesByCourseId(courseId));
    }
}
