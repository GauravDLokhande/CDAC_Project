package com.elearning.dtos;

import java.util.ArrayList;
import java.util.List;

import com.elearning.pojos.enrollments;
import com.elearning.pojos.lessons;
import com.elearning.pojos.modules;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
public class CourseRequestDTO {
//
//	private Long courseId;
	private String courseName;
	private String courseDesc;
	private Long instructorId;	
}
