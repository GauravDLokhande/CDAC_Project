package com.elearning.services;

import java.util.List;

import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.CourseResponseInst;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public interface CourseService {
	List<CourseResponseDTO> getCourseDetails();
	
	public List<CourseResponseInst> getCoursesByInstructor(Long instructorId); 	
	public int countStudentsByCourseId(Long courseId);
}
