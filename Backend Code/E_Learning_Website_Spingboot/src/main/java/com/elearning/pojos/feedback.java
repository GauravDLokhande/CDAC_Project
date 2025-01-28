package com.elearning.pojos;

import java.time.LocalDate;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString(callSuper = true)
@Getter
@Setter
public class feedback {

	@Id
	@Column(name = "feedback_id")
	private Long feedbackId;
	
	// many feedback can be given by the same student --> @ManyToOne
	@ManyToOne
	@JoinColumn(name = "student_id")
	private users student;
	
	// many feedback can come from the same course --> @ManyToOne
	@ManyToOne
	@JoinColumn(name = "course_id")
	private courses feedbackCourse;
	
	private Long rating;
	
	private String comment;
	
	@CreationTimestamp
	@Column(name = "created_at")
	private LocalDate createdAt;
}
