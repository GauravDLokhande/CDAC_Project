package com.elearning.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.elearning.dtos.ApiResponse;
import com.elearning.dtos.LessonReqDto;
import com.elearning.dtos.LessonUpdateDto;
import com.elearning.dtos.ModuleReqDto;
import com.elearning.dtos.ModuleUpdateDto;
import com.elearning.pojos.Modules;

import jakarta.transaction.Transactional;


@Service
@Transactional
public interface InstructorService {
	
	ApiResponse addNewModule(ModuleReqDto moduleReqDto );

	ApiResponse updateModule(Long moduleId, ModuleUpdateDto moduleUpdateDto);

	ApiResponse deleteModule(Long moduleId);
	
	
	
	
	  ApiResponse addNewLesson(LessonReqDto lessonReqDto);
	    ApiResponse updateLesson(Long lessonId, LessonUpdateDto lessonUpdateDto);
	    ApiResponse deleteLesson(Long lessonId);

	    List<Modules> getAllModules();
	
	
	
}
