package com.elearning.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.elearning.dao.UserDAO;
import com.elearning.pojos.Users;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDAO userDAO;

    @Autowired
    private PasswordEncoder passwordEncoder;
	
	@Override
	public String registerUser(Users newUser) {
//		users.setPassword(passwordEncoder.encode(users.getPassword()));
        userDAO.save(newUser);
        return null;
	}

}
