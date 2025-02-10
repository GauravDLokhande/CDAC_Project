package com.elearning.pojos;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString(callSuper = true)
@Getter
@Setter
public class Enrollments {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "enrollment_id")
	private Long enrollmentId;
	
	// in many course enrollments there can be a same student present
	@ManyToOne
	@JoinColumn(name = "student_id")
	private Users students;
	
	// many courses can have the same guy enrolled
	@ManyToOne
	@JoinColumn(name = "course_id")  
	private Courses enrollCourse;
	
	@Column(name = "module_progress", precision = 5, scale = 2)
	private BigDecimal moduleProgress;
	
	@Column(name = "lesson_progress", precision = 5, scale = 2)
	private BigDecimal lessonProgress;
	
	@Column(name = "course_status")
	private Boolean courseStatus;
	
	@CreationTimestamp
	@Column(name = "enrollment_date")
	private LocalDate enrollDate;
	
	

	
	
	
}
