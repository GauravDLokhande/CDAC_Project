package com.elearning.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EnrollmentRequestDTO {

	 private Long courseId;
	    private Long studentId;

	    // Constructors
	    public EnrollmentRequestDTO() {}

	    public EnrollmentRequestDTO(Long courseId, Long studentId) {
	        this.courseId = courseId;
	        this.studentId = studentId;
	    }


	
	
	
}
