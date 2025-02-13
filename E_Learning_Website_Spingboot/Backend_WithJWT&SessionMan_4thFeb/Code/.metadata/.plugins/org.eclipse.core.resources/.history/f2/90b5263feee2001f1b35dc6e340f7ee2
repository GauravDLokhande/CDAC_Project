package com.elearning.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.pojos.users;

public interface UserDAO extends JpaRepository<users, Long> {
	//load use details by user name(email)
	Optional<users> findByEmail(String email);
	boolean existsByEmail(String email);
}
 