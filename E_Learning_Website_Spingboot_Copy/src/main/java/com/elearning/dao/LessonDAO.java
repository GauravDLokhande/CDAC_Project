package com.elearning.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.elearning.dtos.LessonResponseDTO;
import com.elearning.pojos.Lessons;

public interface LessonDAO extends JpaRepository<Lessons, Long> {

    @Query("SELECT new com.elearning.dtos.LessonResponseDTO(l.lessonTitle, l.lessonContent, l.lessonId) " +
           "FROM Lessons l WHERE l.lessonModule.moduleId = :moduleId")
    List<LessonResponseDTO> findLessonsByModuleId(@Param("moduleId") Long moduleId);
    
    // find lesson name and description by lessonId
    Optional<Lessons> findByLessonId(Long lessonId);
  
    @Query(value = "SELECT l.* FROM lessons l " +
            "JOIN modules m ON l.module_id = m.module_id " +
            "JOIN courses c ON m.course_id = c.course_id " +
            "JOIN users u ON c.instructor_id = u.user_id " +  // Ensure instructor mapping exists
            "WHERE u.user_id = :instructorId " +
            "AND DATE(l.updated_on) = CURRENT_DATE " +
            "ORDER BY l.updated_on DESC " +
            "LIMIT 3",
    nativeQuery = true)
    List<Lessons> findTop3ByInstructorId(@Param("instructorId") Long instructorId);

}
