package com.elearning.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.elearning.*;
import com.elearning.pojos.users;

public class CustomUserDetailsImpl implements UserDetails {
	private users userEntity;
	

	public CustomUserDetailsImpl(users userEntity) {
		super();
		this.userEntity = userEntity;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of
				(new SimpleGrantedAuthority(
						userEntity.getRole().name()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return userEntity.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userEntity.getEmail();
	}

	public users getUserEntity() {
		return userEntity;
	}
}
