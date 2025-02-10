package com.elearning.services;

import java.util.List;

import com.elearning.dtos.LessonRequestDto;
import com.elearning.dtos.LessonResponseDTO;
import com.elearning.pojos.Lessons;

public interface LessonService {
	public List<LessonResponseDTO> getLessonsByModuleId(Long moduleId);
	
	public LessonResponseDTO getLessonByLessonId(Long lessonId);
	
	public Lessons addLesson(LessonRequestDto lessonDTO);

}