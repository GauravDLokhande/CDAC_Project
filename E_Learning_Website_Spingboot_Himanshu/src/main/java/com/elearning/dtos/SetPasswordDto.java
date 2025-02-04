package com.elearning.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SetPasswordDto {

	String email;
	String password;
	
	public SetPasswordDto(String email,String password)
	{
		this.email=email;
		this.password=password;
		
	}
	
	
}
