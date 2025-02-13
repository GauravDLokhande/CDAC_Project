package com.elearning.services;

import java.util.List;

import com.elearning.dtos.CourseResponseDTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public interface CourseService {
	List<CourseResponseDTO> getCourseDetails();
}
