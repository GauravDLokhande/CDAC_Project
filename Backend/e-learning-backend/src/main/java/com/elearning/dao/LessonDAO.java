package com.elearning.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.elearning.dtos.LessonResponseDTO;
import com.elearning.pojos.Lessons;

public interface LessonDAO extends JpaRepository<Lessons, Long> {

    @Query("SELECT new com.elearning.dtos.LessonResponseDTO(l.lessonTitle, l.lessonContent, l.lessonId, l.lessonVideoUrl) " +
           "FROM Lessons l WHERE l.lessonModule.moduleId = :moduleId")
    List<LessonResponseDTO> findLessonsByModuleId(@Param("moduleId") Long moduleId);
    
    // find lesson name and description by lessonId
    Optional<Lessons> findByLessonId(Long lessonId);
}
