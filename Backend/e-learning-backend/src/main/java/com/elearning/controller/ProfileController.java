package com.elearning.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.elearning.pojos.Users;
import com.elearning.services.ProfileService;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PutMapping("/update")
    public ResponseEntity<Users> updateProfile(
            @RequestParam Long userId,
            @RequestParam String bio,
            @RequestParam String contactInfo,
            @RequestParam String firstName, 
            @RequestParam String lastName) { 
        Users updatedUser = profileService.updateProfile(userId, bio, contactInfo, firstName, lastName);
        return ResponseEntity.ok(updatedUser);
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadProfilePicture(
            @RequestParam Long userId,
            @RequestParam("file") MultipartFile file) {
        try {
            Users updatedUser = profileService.uploadProfilePicture(userId, file);
            return ResponseEntity.ok("Profile picture uploaded successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error uploading profile picture: " + e.getMessage());
        }
    }
}
