package com.elearning.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.pojos.Users;

public interface UsersDAO extends JpaRepository<Users, Long>{

	Optional<Users> findByUsernameAndPassword(String username, String password);

	Optional<Users> findByEmail(String email);

}
