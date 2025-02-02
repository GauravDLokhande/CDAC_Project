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
	
	private String courseName;
    private String courseImageUrl;

    public EnrollmentResponseDTO(String courseName, String courseImageUrl) {
        this.courseName = courseName;
        this.courseImageUrl = courseImageUrl;
    }
}
