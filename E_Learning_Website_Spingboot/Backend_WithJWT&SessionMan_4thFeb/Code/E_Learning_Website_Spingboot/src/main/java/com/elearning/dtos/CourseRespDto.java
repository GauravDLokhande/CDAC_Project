package com.elearning.dtos;

import java.util.ArrayList;
import java.util.List;

import com.elearning.pojos.Enrollments;
import com.elearning.pojos.Lessons;


public class CourseRespDto {

	
		private Long courseId;
		
		private String courseName;
		
		private String courseDesc;
		
		private Long instructorId;
		
	    private String courseImageUrl;
		
		private List<Enrollments> enrollment = new ArrayList<>();
		
//		// many courses can belong to the same module
//		@ManyToOne
//		@JoinColumn(name = "module_id")
//		private modules courseModule;
		
		// many courses can have the same lesson
		private Lessons manyToOneCourseLesson;
	}

	