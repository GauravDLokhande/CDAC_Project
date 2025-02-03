package com.elearning.dtos;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class CourseResponseDTO {
	
	private String courseName;
	private String courseDesc;
	
	public CourseResponseDTO(String courseName, String courseDesc) {
		super();
		this.courseName = courseName;
		this.courseDesc = courseDesc;
	}
}
