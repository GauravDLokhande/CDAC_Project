package com.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.dtos.LessonRequestDto;
import com.elearning.dtos.LessonResponseDTO;
import com.elearning.dtos.ModuleResponseDTO;
import com.elearning.pojos.Lessons;
import com.elearning.pojos.Modules;
import com.elearning.services.LessonService;
import com.elearning.services.ModuleService;

@RestController
@RequestMapping("/lesson_controller")
@CrossOrigin("*")
public class LessonController {

    @Autowired
    private LessonService lessonService;
    
    @Autowired
    private ModuleService moduleService;

    @GetMapping("/modules/lessons/{moduleId}")
    public List<LessonResponseDTO> getLessonsByModuleId(@PathVariable Long moduleId) {
        return lessonService.getLessonsByModuleId(moduleId);
    }
    
    @GetMapping("/lessons/{lessonId}")
    public LessonResponseDTO getLessonByLessonId(@PathVariable Long lessonId) {
    	return lessonService.getLessonByLessonId(lessonId);
    }

    /*********************************/
    
    
    @GetMapping("/{courseId}/getmodules")
    public ResponseEntity<List<ModuleResponseDTO>> getModulesByCourseId(@PathVariable Long courseId) {
        List<ModuleResponseDTO> modules = moduleService.getModulesByCourseId(courseId);
        return ResponseEntity.ok(modules);
    }
    
    
    // Endpoint to add a lesson, data sent as JSON in the request body
    @PostMapping("/addLesson")
    public ResponseEntity<?> addLesson(@RequestBody LessonRequestDto lessonDTO) {
        // Call the service to save the lesson
        Lessons newLesson = lessonService.addLesson(lessonDTO);
        return ResponseEntity.ok("Lesson Added Successfully"); // Return the created lesson as a response
    }
    
//    @GetMapping("/recent/{instructorId}")
//    public ResponseEntity<List<LessonResponseDTO>> getRecentLessons(@PathVariable Long instructorId) {
//        List<Lessons> lessons = lessonService.getLastThreeLessons(instructorId);
//     // Convert Lessons to LessonResponseDTO
//        List<LessonResponseDTO> responseDTOs = lessons.stream()
//                .map(lesson -> new LessonResponseDTO(lesson.getLessonTitle(), lesson.getLessonContent(), lesson.getLessonId()))
//                .toList();
//
//        return ResponseEntity.ok(responseDTOs);
//    }
    
    @GetMapping("/recent/{instructorId}")
    public ResponseEntity<List<LessonResponseDTO>> getRecentLessons(@PathVariable Long instructorId) {
        List<LessonResponseDTO> responseDTOs = lessonService.getLastThreeLessons(instructorId);
        
        return ResponseEntity.ok(responseDTOs);
    }
    
    
}
