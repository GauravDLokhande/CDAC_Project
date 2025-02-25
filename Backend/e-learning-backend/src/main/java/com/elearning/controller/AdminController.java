package com.elearning.controller;

import com.elearning.dtos.AdminRequestDTO;
import com.elearning.dtos.AdminResponseDTO;
import com.elearning.dtos.CourseRequestDTO;
import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.UserRegPerMonResponseDTO;
import com.elearning.services.AdminService;
import com.elearning.services.FakeInstructorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173/")
public class AdminController {

	@Autowired
    private AdminService adminService;
	
	@Autowired
	private FakeInstructorService fakeInstructorService;

//	@GetMapping("/user-count-per-month")
//	public List<UserRegPerMonResponseDTO> getUserCountsPerMonth() {
//	    return adminService.getRegisteredUserCountsPerMonth();
//	}
	
	// get count of registered user per month
	@GetMapping("/user-registrations-per-month")
    public Map<String, Long> getUserRegistrationCountsPerMonth() {
        return adminService.getUserRegistrationCountPerMonth();
    }

	// count of enrolled user per month
    @GetMapping("/enrolled-users-per-course")
    public List<AdminResponseDTO> getEnrolledUserCountPerCourse() {
        return adminService.getEnrolledUserCountPerCourse();
    }
    
    // add instructor and assign him course
    @PostMapping("/add-instructor")
    public String addInstructorAndAssignCourse(@RequestBody AdminRequestDTO requestDTO) {
        return fakeInstructorService.addInstructorAndAssignCourse(requestDTO);
    }
    
    // get list of students for admin
    @GetMapping("/students")
    public List<AdminResponseDTO> getAllStudents() {
        return adminService.getAllStudents();
    }
    
    // get the list of instructors
    @GetMapping("/instructors")
    public List<AdminResponseDTO> getAllInstructors() {
        return adminService.getAllInstructors();
    }
    
    // get the list of courses
    @GetMapping("/courses")
    public List<CourseResponseDTO> getAllCourses() {
        return adminService.getAllCourses();
    }
    
    // add course and assign a instructor to it
    @PostMapping("/add-course")
    public ResponseEntity<String> addCourse(@RequestBody CourseRequestDTO courseDTO) {
        String response = adminService.addCourse(courseDTO);
        return ResponseEntity.ok(response);
    }
    
    // soft delete a student
    @PutMapping("/deleteUser/{userId}")
    public ResponseEntity<String> softDeleteStudent(@PathVariable Long userId) {
        String response = adminService.softDeleteUser(userId);
        return ResponseEntity.ok(response);
    }
    
    // soft delete a course
    @PutMapping("/courses/delete/{courseId}")
    public ResponseEntity<String> softDeleteCourse(@PathVariable Long courseId) {
        String response = adminService.softDeleteCourse(courseId);
        return ResponseEntity.ok(response);
    }
    
    // get count of values for admin dashboard
    @GetMapping("/counts")
    public Map<String, Long> getEntityCounts() {
        return adminService.getCounts();
    }
}
