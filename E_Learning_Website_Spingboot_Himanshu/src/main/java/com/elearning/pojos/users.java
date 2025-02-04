package com.elearning.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import com.elearning.dtos.UserDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class Users extends BaseEntity {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;
	
	@Column(length = 50)
	private String username;
	
	@Column(length = 50)
	private String email;
	
	@Column(length = 50)
	private String password;
	
	@Column(length = 50)
	private String role;
	
	@Column(length = 255)
	private String bio;
	
	@Column(name="contact_info",length = 100)
	private String contactInfo;
	
	@Lob
	@Column(name="profile_picture")
	private String profilePic;

	public Users(String username, String email, String password, String role, String bio, String contactInfo,
			String profilePic) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
		this.bio = bio;
		this.contactInfo = contactInfo;
		this.profilePic = profilePic;
	}

	
	
	
}
