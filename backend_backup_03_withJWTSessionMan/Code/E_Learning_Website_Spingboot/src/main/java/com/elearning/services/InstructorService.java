package com.elearning.services;

import com.elearning.dtos.InstructorResponseDTO;

public interface InstructorService {
	public InstructorResponseDTO getInstructorByLessonId(Long lessonId);
}
