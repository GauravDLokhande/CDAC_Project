package com.elearning.services;

import com.elearning.dtos.UserRequestDto;
import com.elearning.pojos.Users;

public interface UserService {
	public String registerUser(Users newUser);
	
	 public Users updateUser(Long userId, UserRequestDto userDetails);
	
}
