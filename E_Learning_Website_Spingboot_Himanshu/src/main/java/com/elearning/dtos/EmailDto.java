package com.elearning.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailDto {

	String email;
	
	public EmailDto(String email) {
		this.email=email;
	}
	
	
}
