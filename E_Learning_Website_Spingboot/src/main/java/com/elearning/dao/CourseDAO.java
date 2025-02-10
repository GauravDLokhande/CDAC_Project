package com.elearning.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.elearning.pojos.Courses;
import com.elearning.pojos.Users;

public interface CourseDAO extends JpaRepository<Courses, Long>{
	List<Courses> findByInstructor(Users instructor);

	Courses findByInstructor_UserIdAndCourseId(Long userId, Long courseId);
	

    @Query("SELECT COUNT(e) FROM Enrollments e WHERE e.enrollCourse.courseId = :courseId")
    int countStudentsByCourseId(Long courseId);

}
