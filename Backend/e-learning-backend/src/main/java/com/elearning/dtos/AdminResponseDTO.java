package com.elearning.dtos;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class AdminResponseDTO {
	
	// get list of students
	private Long userId;
    private String username;
    private String email;
    private String contactInfo;
    private Date createdOn;        // Added field
    private Date updatedOn;    // Added field
    
    // for getting no students enrolled per month
    private String courseName;
    private Long enrolledCount;

    // for getting no students enrolled per month
    public AdminResponseDTO(String courseName, Long enrolledCount) {
        this.courseName = courseName;
        this.enrolledCount = enrolledCount;
    }

    
	// get list of students/instructors
	public AdminResponseDTO(Long userId, String username, String email, String contactInfo, Date createdOn,
			Date updatedOn) {
		super();
		this.userId = userId;
		this.username = username;
		this.email = email;
		this.contactInfo = contactInfo;
		this.createdOn = createdOn;
		this.updatedOn = updatedOn;
	}
}
