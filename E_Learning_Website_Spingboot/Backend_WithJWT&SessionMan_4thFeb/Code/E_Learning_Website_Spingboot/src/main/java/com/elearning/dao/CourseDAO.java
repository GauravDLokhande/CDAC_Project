package com.elearning.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.pojos.Courses;

public interface CourseDAO extends JpaRepository<Courses, Long>{
    List<Courses> findByInstructorId(Long instructorId);
    Courses findByInstructorIdAndCourseId(Long instructorId, Long courseId);


}
