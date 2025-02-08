package com.elearning.services;

import java.util.List;
import java.util.Map;

import com.elearning.dtos.AdminRequestDTO;
import com.elearning.dtos.AdminResponseDTO;
import com.elearning.dtos.CourseRequestDTO;
import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.UserRegPerMonResponseDTO;

public interface AdminService {
	
//	public List<UserRegPerMonResponseDTO> getRegisteredUserCountsPerMonth();
	
	// number of students enrolled per month
	public List<AdminResponseDTO> getEnrolledUserCountPerCourse();
	
	// get list of students to be showed to admin for operations
	public List<AdminResponseDTO> getAllStudents();
	
	// get the list of instructors
	public List<AdminResponseDTO> getAllInstructors();
	
    // get the list of courses
	public List<CourseResponseDTO> getAllCourses();
	
	// add a course and assign instructor to it
	public String addCourse(CourseRequestDTO courseDTO);
	
	// soft delete a student
	public String softDeleteUser(Long userId);
	
	// soft delete a course
	public String softDeleteCourse(Long courseId);
	
	// get count of all values
	Map<String, Long> getCounts();
	
	// get list of registered users per month
	public Map<String, Long> getUserRegistrationCountPerMonth();
}
