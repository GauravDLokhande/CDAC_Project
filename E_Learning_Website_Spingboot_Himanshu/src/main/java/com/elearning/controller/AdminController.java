package com.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.dtos.ApiResponse;
import com.elearning.dtos.CourseRequestDTO;
import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.UserDTO;
import com.elearning.pojos.Users;
import com.elearning.services.AdminServices;


@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminServices adminServices;
	
	
	@GetMapping
	public ResponseEntity<?> getAllCourses()
	{
		System.out.println("Inside get All Categories....");
		
		List<CourseResponseDTO> courses=adminServices.getAllCourses();
		if(courses.isEmpty())
		{
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		else
		{
			return ResponseEntity.ok(courses);
		}
		
	}
	
	@PostMapping
	public ApiResponse createCourse(@RequestBody CourseRequestDTO courseDto)
	{
		System.out.println("Inside Create Course....");
		String message=adminServices.createCourse(courseDto);
		return new ApiResponse(message);
	}
	
	
	
}
