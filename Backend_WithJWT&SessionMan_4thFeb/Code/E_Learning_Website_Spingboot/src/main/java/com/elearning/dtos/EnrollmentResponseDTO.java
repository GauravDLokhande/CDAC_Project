package com.elearning.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class EnrollmentResponseDTO {
	
	private Long courseId;
	private String courseName;
    private String courseImageUrl;

    public EnrollmentResponseDTO(String courseName, String courseImageUrl, Long courseId) {
        this.courseName = courseName;
        this.courseImageUrl = courseImageUrl;
        this.courseId = courseId;
    }
}
