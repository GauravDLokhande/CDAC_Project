package com.elearning.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.elearning.dtos.CourseProgressDTO;
import com.elearning.dtos.EnrollmentResponseDTO;
import com.elearning.dtos.ModuleResponseDTO;
import com.elearning.pojos.enrollments;

public interface EnrollmentDAO extends JpaRepository<enrollments, Long> {

    @Query("SELECT new com.elearning.dtos.EnrollmentResponseDTO(e.enrollCourse.courseName, e.enrollCourse.courseImageUrl) FROM enrollments e WHERE e.students.userId = :studentId")
    List<EnrollmentResponseDTO> findCourseDetailsByStudentId(@Param("studentId") Long studentId);
    
    @Query("SELECT new com.elearning.dtos.CourseProgressDTO(e.enrollCourse.courseName, p.progressPercent) " +
            "FROM progress_reports p " +
            "JOIN p.prCourse c " +  
            "JOIN enrollments e ON e.enrollCourse.courseId = c.courseId " +  
            "WHERE e.students.userId = :studentId")
     List<CourseProgressDTO> findCourseProgressByStudentId(@Param("studentId") Long studentId);
    
    @Query("SELECT new com.elearning.dtos.ModuleResponseDTO(m.moduleName, m.moduleDescription) " +
    	       "FROM modules m " +
    	       "WHERE m.moduleCourse.courseId = :courseId")
    	List<ModuleResponseDTO> findModulesByCourseId(@Param("courseId") Long courseId);
}
