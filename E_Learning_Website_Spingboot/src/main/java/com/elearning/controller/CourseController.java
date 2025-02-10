package com.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.dtos.CourseResponseDTO;
import com.elearning.services.CourseService;

@RestController
@RequestMapping("/courses")
@CrossOrigin("*")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping
	public ResponseEntity<?> getAllCategories() {
		System.out.println("in get all categories");
		List<CourseResponseDTO> categories = 
				courseService.getCourseDetails();
		if (categories.isEmpty()) {
			// SC 204
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			// SC 200 + list
			return ResponseEntity.ok(categories);
		}
	}
}
