package com.elearning.services;

import com.elearning.dtos.ApiResponse;
import com.elearning.dtos.UserDTO;

public interface UserService {

	public String login(String username,String password);

	public String setPassword(String email, String password);
	
	public String createUser(UserDTO userdto);

	public String deleteUser(String email);
	
	public boolean validateUser(String email);
}
