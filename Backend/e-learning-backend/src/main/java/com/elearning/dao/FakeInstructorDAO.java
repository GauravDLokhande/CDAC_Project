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
public interface FakeInstructorDAO extends JpaRepository<Users, Long> {
	
    Users findByEmail(String email); // To check if an instructor already exists
 
}
