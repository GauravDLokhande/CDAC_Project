package com.elearning.services;

import com.elearning.dtos.UserDTO;
import com.elearning.pojos.Users;

public interface UserService {	
	public String setPassword(String email, String password);
	
	public String createUser(UserDTO userdto);

	public String deleteUser(String email);
	
	public boolean validateUser(String email);
}
