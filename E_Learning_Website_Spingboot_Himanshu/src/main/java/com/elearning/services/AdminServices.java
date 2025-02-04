package com.elearning.services;

import java.util.List;

import com.elearning.dtos.CourseRequestDTO;
import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.UserDTO;
import com.elearning.pojos.Users;

public interface AdminServices {

	public List<CourseResponseDTO> getAllCourses();

	public String createCourse(CourseRequestDTO courseDto);
			
	
}
