package com.elearning.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.LessonDAO;
import com.elearning.dtos.LessonResponseDTO;
import com.elearning.pojos.Lessons;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LessonServiceImpl implements LessonService {
	
	@Autowired
	private ModelMapper modelMapper;

    @Autowired
    private LessonDAO lessonDAO;

    public List<LessonResponseDTO> getLessonsByModuleId(Long moduleId) {
        return lessonDAO.findLessonsByModuleId(moduleId);
    }

	@Override
	public LessonResponseDTO getLessonByLessonId(Long lessonId) {
		Lessons lesson = lessonDAO.findByLessonId(lessonId)
                .orElseThrow(() -> new RuntimeException("Lesson not found for id: " + lessonId));

        return new LessonResponseDTO(lesson.getLessonTitle(), lesson.getLessonContent(), lesson.getLessonId(), lesson.getLessonVideoUrl());
	}

	
}
