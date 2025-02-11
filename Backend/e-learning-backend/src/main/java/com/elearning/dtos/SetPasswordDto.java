package com.elearning.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SetPasswordDto {

	String email;
	String password;
	
	
	
	public SetPasswordDto(String email,String password)
	{
		this.email=email;
		this.password=password;
		
	}
	
	
}