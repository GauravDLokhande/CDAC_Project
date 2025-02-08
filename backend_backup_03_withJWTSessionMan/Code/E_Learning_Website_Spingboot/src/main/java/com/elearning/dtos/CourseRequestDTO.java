package com.elearning.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CourseRequestDTO {
    private String courseName;
    private String courseDesc;
    private Long instructorId; // Instructor ID to assign
}