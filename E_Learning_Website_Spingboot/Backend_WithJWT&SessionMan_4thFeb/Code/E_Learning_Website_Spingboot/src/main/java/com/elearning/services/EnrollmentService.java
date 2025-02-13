package com.elearning.services;

import java.util.List;

import com.elearning.dtos.CourseProgressDTO;
import com.elearning.dtos.EnrollmentResponseDTO;
import com.elearning.dtos.ModuleResponseDTO;

public interface EnrollmentService {
	public List<EnrollmentResponseDTO> getEnrollCourse(Long studentId);
	
	public List<CourseProgressDTO> getCourseProgressByStudentId(Long studentId);
	
	public List<ModuleResponseDTO> getModulesByCourseId(Long courseId);
}
