package com.elearning.dtos;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

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
	
    private Long courseId;
    private String instructorName;
    private Date createdOn;
    private Date updatedOn;
	
	private String courseName;
	private String courseDesc;
	private String courseImageUrl;
	
	public CourseResponseDTO(String courseName, String courseDesc, String courseImageUrl) {
		super();
		this.courseName = courseName;
		this.courseDesc = courseDesc;
		this.courseImageUrl = courseImageUrl;
	}
	
	public CourseResponseDTO(Long courseId, String courseName, String courseDesc, 
            String instructorName, Date createdOn, Date updatedOn) {
				this.courseId = courseId;
				this.courseName = courseName;
				this.courseDesc = courseDesc;
				this.instructorName = instructorName;
				this.createdOn = createdOn;
				this.updatedOn = updatedOn;
	}
}
