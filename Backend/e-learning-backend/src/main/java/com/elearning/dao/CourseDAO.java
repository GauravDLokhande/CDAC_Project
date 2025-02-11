package com.elearning.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.elearning.pojos.Courses;
import com.elearning.pojos.Users;

public interface CourseDAO extends JpaRepository<Courses, Long>{
    List<Courses> findByInstructor(Users instructor);  
    
    // soft delete a course
    Optional<Courses> findByCourseIdAndStatusFalse(Long courseId);
    
    // for counting no of courses
    long countByStatus(boolean status);

    @Query("SELECT COUNT(e) FROM Enrollments e WHERE e.enrollCourse.courseId = :courseId")
    int countStudentsByCourseId(Long courseId);
}
