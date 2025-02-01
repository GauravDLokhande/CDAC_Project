package com.elearning.pojos;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ManyToAny;

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
public class Courses extends BaseEntity{
	@Id
	@Column(name="course_id")
	private Long courseId;
	
	@Column(name="course_name")
	private String courseName;
	
	@Column(name="course_description")
	private String courseDesc;
	
	@Column(name="instructor_id")
	private Long instructorId;
	
//	 in one enrollment a student can enroll in multiple courses
	@OneToMany(mappedBy = "enrollCourse", cascade = CascadeType.ALL ,orphanRemoval = true)
	private List<Enrollments> enrollment = new ArrayList<>();
	
	// many courses can belong to the same module
	@ManyToOne
	@JoinColumn(name = "module_id")
	
	private Modules courseModule;
	
	// many courses can have the same lesson
	@ManyToOne
	@JoinColumn(name = "lesson_id",nullable = true)
	private Lessons manyToOneCourseLesson;
}
