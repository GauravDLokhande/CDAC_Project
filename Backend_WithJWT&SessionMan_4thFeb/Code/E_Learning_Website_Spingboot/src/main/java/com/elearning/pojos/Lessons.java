package com.elearning.pojos;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
public class Lessons extends BaseEntity{
	

	@Id
	@Column(name = "lesson_id")
	private Long lessonId;
	
//	 many lessons can belong to the same module --> @ManyToOne
	@ManyToOne
	@JoinColumn(name = "module_id")
	private Modules lessonModule;
	
	// one lesson can belong to many courses --> @OneToMany
	@OneToMany(mappedBy = "manyToOneCourseLesson", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Courses> oneToManyLessonCourse;
	
	@Column(name = "lesson_title")
	private String lessonTitle;
	
	@Column(name = "lesson_content")
	private String lessonContent;
	
	@Column(name = "quiz_title")
	private String quizTitle;
	
	@Column(name = "quiz_description")
	private String quizDesc;
	
	@Column(name = "assessment_title")
	private String assessTitle;
	
	@Column(name = "assessment_type")
	private String assessType;
}
