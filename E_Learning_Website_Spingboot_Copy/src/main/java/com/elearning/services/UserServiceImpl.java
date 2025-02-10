package com.elearning.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.elearning.dao.UserDAO;
import com.elearning.dtos.UserRequestDto;
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
	
	
	 public Users updateUser(Long userId, UserRequestDto userDetails) {
	        // Find user by id
	        Optional<Users> userOpt = userDAO.findById(userId);
	        if (userOpt.isPresent()) {
	            Users existingUser = userOpt.get();
	            
	            // Update user details (username, email, password, contactInfo)
	            existingUser.setUsername(userDetails.getUsername());
	            existingUser.setEmail(userDetails.getEmail());
	            existingUser.setPassword(userDetails.getPassword());
	            existingUser.setContactInfo(userDetails.getContactInfo());
	            
	            // Save updated user
	            return userDAO.save(existingUser);
	        } else {
	            throw new RuntimeException("User not found with id: " + userId);
	        }
	    }

}
