package com.elearning.services;

import com.elearning.dtos.InstructorResponseDTO;
import com.elearning.dtos.ModuleRequestDto;

public interface InstructorService {
	public InstructorResponseDTO getInstructorByLessonId(Long lessonId);
	
	public String addModule(ModuleRequestDto moduleRequestDto);
	
	public String deleteModule(Long moduleId);
}
