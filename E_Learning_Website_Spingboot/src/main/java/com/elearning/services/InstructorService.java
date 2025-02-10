package com.elearning.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.elearning.dtos.CourseRespDto;
import com.elearning.dtos.ModuleRequestDto;
import com.elearning.pojos.Courses;

import jakarta.transaction.Transactional;


@Service
@Transactional
public interface InstructorService {
	
//	List<CourseRespDto> getCoursesByInstructorId(Long instructorId);
//	CourseRespDto getCourseByInstructorAndCourseId(Long instructorId, Long courseId);

	public String addModule(ModuleRequestDto moduleRequestDto);
	
	public String deleteModule(Long moduleId);
	
}
