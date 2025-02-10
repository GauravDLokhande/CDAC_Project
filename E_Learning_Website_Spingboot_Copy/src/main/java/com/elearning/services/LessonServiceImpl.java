package com.elearning.services;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.LessonDAO;
import com.elearning.dao.ModuleDao;
import com.elearning.dtos.LessonRequestDto;
import com.elearning.dtos.LessonResponseDTO;
import com.elearning.dtos.ModuleResponseDTO;
import com.elearning.pojos.Lessons;
import com.elearning.pojos.Modules;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LessonServiceImpl implements LessonService {
	
	@Autowired
	private ModelMapper modelMapper;

    @Autowired
    private LessonDAO lessonDAO;
    
    @Autowired
    private ModuleService moduleService;
    

    public List<LessonResponseDTO> getLessonsByModuleId(Long moduleId) {
        return lessonDAO.findLessonsByModuleId(moduleId);
    }
    
    public List<ModuleResponseDTO> getModulesByCourseId(Long courseId) {
        return moduleService.getModulesByCourseId(courseId);
    }

	@Override
	public LessonResponseDTO getLessonByLessonId(Long lessonId) {
		Lessons lesson = lessonDAO.findByLessonId(lessonId)
                .orElseThrow(() -> new RuntimeException("Lesson not found for id: " + lessonId));

        return new LessonResponseDTO(lesson.getLessonTitle(), lesson.getLessonContent(), lesson.getLessonId());
	}
	
	
	 public Lessons addLesson(LessonRequestDto lessonDTO) {
	        // Create a new lesson object
	        Lessons lesson = new Lessons();
	        lesson.setLessonTitle(lessonDTO.getLessonTitle());
	        lesson.setLessonContent(lessonDTO.getLessonContent());
	        lesson.setQuizTitle(lessonDTO.getQuizTitle());
	        lesson.setQuizDesc(lessonDTO.getQuizDesc());
	        lesson.setAssessTitle(lessonDTO.getAssessTitle());
	        lesson.setAssessType(lessonDTO.getAssessType());

	        // Set the module for the lesson (Fetching module from moduleId)
	        lesson.setLessonModule(moduleService.getModuleById(lessonDTO.getModuleId()));

	        // Set the video and thumbnail file paths (received from the frontend)
	        lesson.setLessonVideoUrl(lessonDTO.getLessonVideoPath()); // Set the video file path
	        lesson.setThumbnailFile(lessonDTO.getThumbnailFilePath()); // Set the thumbnail file path

	        // Save lesson to the database
	        return lessonDAO.save(lesson);
	    }


//	    @Override
//	    public List<Lessons> getLastThreeLessons(Long instructorId) {
//	        List<Lessons> lessons = lessonDAO.findTop3ByInstructorId(instructorId);
//	        return lessons.size() > 3 ? lessons.subList(0, 3) : lessons; // Manually limit to 3
//	    }
	 
	 public List<LessonResponseDTO> getLastThreeLessons(Long instructorId) {
	        List<Lessons> lessons = lessonDAO.findTop3ByInstructorId(instructorId);
	        
	        return lessons.stream()
	                .map(lesson -> new LessonResponseDTO(
	                        lesson.getLessonId(),
	                        lesson.getLessonTitle(),
	                        lesson.getLessonContent(),
	                        lesson.getLessonModule().getModuleCourse().getCourseName(),  // Getting course name
	                        lesson.getThumbnailFile()  // Getting thumbnail image
	                ))
	                .collect(Collectors.toList());
	    }
	 
	 
}
