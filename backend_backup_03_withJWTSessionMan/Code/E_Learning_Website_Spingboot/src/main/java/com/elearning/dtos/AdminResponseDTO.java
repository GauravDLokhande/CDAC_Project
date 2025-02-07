package com.elearning.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class AdminResponseDTO {
	
    private String courseName;
    private Long enrolledCount;

    public AdminResponseDTO(String courseName, Long enrolledCount) {
        this.courseName = courseName;
        this.enrolledCount = enrolledCount;
    }
}
