package com.elearning.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.UsersDAO;
import com.elearning.dtos.ApiResponse;
import com.elearning.dtos.UserDTO;
import com.elearning.pojos.Users;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UsersDAO userDao;
	
	@Override
	public String login(String username, String password) {
		
		 Optional<Users> user = userDao.findByUsernameAndPassword(username, password);
		 
		 // Debugging
		    System.out.println("Checking username: " + username);
		    System.out.println("Checking password: " + password);
		    System.out.println("User found: " + user.isPresent());
		 
//		 System.out.println(user.get());
	        
	        if (user.isPresent()) {
	            return user.get().getRole();
	        } else {
	            return "invalid";
	        }
	}

	@Override
	public String setPassword(String email, String password)
	{
		Optional<Users> userOptional=userDao.findByEmail(email);
		
		if(userOptional.isPresent())
		{
			Users user=userOptional.get();
			user.setPassword(password);
			userDao.save(user);
			return "Password Updated Successfully";
		}
		else {
            return "User not found";
        }
		
	}

	@Override
	public String createUser(UserDTO userdto) {
		
		Users user=new Users(userdto.getUsername(), userdto.getEmail(),userdto.getPassword(),userdto.getRole(),userdto.getBio(),userdto.getContactInfo(),userdto.getProfilePic());
		userDao.save(user);
		return "User Created Successfully";
	}
	
	@Override
	public String deleteUser(String email)
	{
		Optional<Users> user=userDao.findByEmail(email);
		
		if(user.isPresent())
		{
			userDao.delete(user.get());
			return "User Deleted Successfully";
		}
		else
			return "User is not deleted Successfully";
	}
	
	
	
	
	public boolean validateUser(String email)
	{
		Optional<Users> user=userDao.findByEmail(email);
		
		if(user.isPresent())
			return true;
		else
			return false;
		
	}
	
	
}
