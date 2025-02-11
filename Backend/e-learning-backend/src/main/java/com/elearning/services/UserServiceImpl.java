package com.elearning.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.elearning.dao.UserDAO;
import com.elearning.dtos.UserDTO;
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
	public String setPassword(String email, String password)
	{
		Optional<Users> userOptional=userDAO.findByEmail(email);
		
		if(userOptional.isPresent())
		{
			Users user=userOptional.get();
			user.setPassword(password);
			userDAO.save(user);
			return "Password Updated Successfully";
		}
		else {
            return "User not found";
        }
		
	}

	@Override
	public String createUser(UserDTO userdto) {
		
		Users user=new Users(userdto.getUsername(), userdto.getEmail(),userdto.getPassword(),userdto.getRole(),userdto.getBio(),userdto.getContactInfo(),userdto.getProfilePic());
		userDAO.save(user);
		return "User Created Successfully";
	}
	
	@Override
	public String deleteUser(String email)
	{
		Optional<Users> user=userDAO.findByEmail(email);
		
		if(user.isPresent())
		{
			userDAO.delete(user.get());
			return "User Deleted Successfully";
		}
		else
			return "User is not deleted Successfully";
	}
	
	
	
	
	public boolean validateUser(String email)
	{
		Optional<Users> user=userDAO.findByEmail(email);
		
		if(user.isPresent())
			return true;
		else
			return false;
		
	}

}
