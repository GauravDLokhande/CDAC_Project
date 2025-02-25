package com.elearning.dao;

import com.elearning.dtos.AdminResponseDTO;
import com.elearning.dtos.UserRegPerMonResponseDTO;
import com.elearning.pojos.Enrollments;
import com.elearning.pojos.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminDAO extends JpaRepository<Enrollments, Long> {

//	@Query("SELECT new com.elearning.dtos.UserRegPerMonResponseDTO( " +
//		       "FORMATDATETIME(u.registrationDate, 'MMMM yyyy'), " +
//		       "COUNT(u.userId)) " +
//		       "FROM Users u " +
//		       "GROUP BY FORMATDATETIME(u.registrationDate, 'MMMM yyyy')")
//		List<UserRegPerMonResponseDTO> getUserCountPerMonth();


	@Query("SELECT new com.elearning.dtos.AdminResponseDTO(e.enrollCourse.courseName, COUNT(e.students.userId)) " +
		       "FROM Enrollments e GROUP BY e.enrollCourse.courseId")
	List<AdminResponseDTO> getEnrolledUserCountPerCourse();
	
}
