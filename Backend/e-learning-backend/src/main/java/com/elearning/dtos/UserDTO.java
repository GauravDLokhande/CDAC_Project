package com.elearning.dtos;

import com.elearning.pojos.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter

public class UserDTO {
	
	private String username;
	private String email;
	private String password;
	private UserRole role;
	private String bio;
	private String contactInfo;
	private String profilePic;
	
	public UserDTO(String email, String password, UserRole role, String bio, String contactInfo, String profilePic) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
		this.bio = bio;
		this.contactInfo = contactInfo;
		this.profilePic = profilePic;
	}
}