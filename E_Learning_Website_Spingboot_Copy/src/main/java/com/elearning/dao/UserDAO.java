package com.elearning.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.pojos.Users;

public interface UserDAO extends JpaRepository<Users, Long> {
	//load use details by user name(email)
	Optional<Users> findByEmail(String email);
	boolean existsByEmail(String email);
}
 