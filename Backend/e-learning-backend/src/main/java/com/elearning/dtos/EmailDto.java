package com.elearning.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailDto {
	
	String email;
	
	// No-args constructor
    public EmailDto() {}
	
	public EmailDto(String email) {
		this.email=email;
	}
	
	
}