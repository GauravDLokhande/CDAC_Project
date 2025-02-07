package com.elearning.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.elearning.pojos.Users;

@Repository
public interface InstructorDAO extends JpaRepository<Users, Long> {

    @Query("SELECT l.instructorId FROM Lessons l WHERE l.lessonId = :lessonId")
    Users findInstructorByLessonId(Long lessonId);
}
