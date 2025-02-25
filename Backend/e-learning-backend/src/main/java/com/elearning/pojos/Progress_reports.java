package com.elearning.pojos;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

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
public class Progress_reports {
	
	@Id
	@Column(name = "report_id")
	private Long reportId;
	
	// many prog reports can belong to same student
	@ManyToOne
	@JoinColumn(name = "student_id")
	private Users prStudent;
	
	// many prog reports can belong to same course
	@ManyToOne
	@JoinColumn(name = "course_id")
	private Courses prCourse;
	
	// many prog reports can belong to same lesson
	@ManyToOne
	@JoinColumn(name = "lesson_id")
	private Lessons prLesson;
	
	// many prog reports can belong to same module
	@ManyToOne
	@JoinColumn(name = "module_id")
	private Modules prModule;

	@Column(name = "quiz_score", precision = 5, scale = 2)
	private BigDecimal quizScore;
	
	@Column(name = "assessment_score", precision = 5, scale = 2)
	private BigDecimal assessScore;
	
	@Column(name = "progress_percentage", precision = 5, scale = 2)
	private BigDecimal progressPercent;
	
	@Column(name = "created_at")
	private LocalDate createdAt;
}
