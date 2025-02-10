package com.elearning.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.elearning.dao.UserDAO;
import com.elearning.dtos.UserRequestDto;
import com.elearning.pojos.Users;
import com.elearning.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Users user) {
        try {
            userService.registerUser(user);
            return ResponseEntity.ok("User registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
    
    // Update user information (username, email, password, contactInfo)
    @PutMapping("/update/{userId}")
    public ResponseEntity<Users> updateUser(@PathVariable Long userId, @RequestBody UserRequestDto user) {
        try {
            Users updatedUser = userService.updateUser(userId, user);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
    
    
    
}
