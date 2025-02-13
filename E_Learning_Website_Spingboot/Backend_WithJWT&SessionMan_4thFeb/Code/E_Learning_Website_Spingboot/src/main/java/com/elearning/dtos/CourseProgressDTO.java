package com.elearning.dtos;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class CourseProgressDTO {
	
	private String courseName;
    private BigDecimal progressPercentage;

    public CourseProgressDTO(String courseName, BigDecimal progressPercentage) {
        this.courseName = courseName;
        this.progressPercentage = progressPercentage;
    }
	
}
