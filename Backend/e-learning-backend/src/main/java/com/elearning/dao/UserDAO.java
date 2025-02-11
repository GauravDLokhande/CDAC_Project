package com.elearning.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.elearning.pojos.UserRole;
import com.elearning.pojos.Users;

public interface UserDAO extends JpaRepository<Users, Long> {
	//load use details by user name(email)
	Optional<Users> findByEmail(String email);
	boolean existsByEmail(String email);
	
	   // Fetch all users with role STUDENT
    List<Users> findByRole(UserRole role);
    
    // soft delete a student
    Optional<Users> findByUserIdAndStatusFalse(Long userId);
    
    // for counting no of students
    long countByRoleAndStatus(UserRole role, boolean status);
    
    // get list of registered users per month
    @Query("SELECT YEAR(u.registrationDate), MONTH(u.registrationDate), COUNT(u) " +
    	       "FROM Users u " +
    	       "WHERE u.status = false " +  // Only active users
    	       "GROUP BY YEAR(u.registrationDate), MONTH(u.registrationDate) " +
    	       "ORDER BY YEAR(u.registrationDate), MONTH(u.registrationDate)")
    	List<Object[]> getUserRegistrationCountPerMonth();
    	
    	// by himanshu for registration and otp
    	Optional<Users> findByUsernameAndPassword(String username, String password);
}
 