package com.elearning.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@ToString(callSuper = true, exclude = { "password"})
public class Users extends BaseEntity{
		
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
	
	@Enumerated(EnumType.STRING) // create column of type
	// varchar to store the name of constant
	@Column(length = 30) // varchar(30)
	private UserRole role;
	
	/*@Enumerated(EnumType.STRING)
@Column(nullable = false)*/
	
	@Column(length = 255)
	private String bio;
	
	@Column(name="contact_info",length = 100)
	private String contactInfo;
	
	@Lob
	@Column(name="profile_picture")
	private String profilePic;
	
	
}
