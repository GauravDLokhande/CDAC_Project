package com.elearning.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.elearning.dao.UsersDAO;
import com.elearning.pojos.Users;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ProfileService {

    private final String uploadDir = "D:/CDAC-Project/E-Learning-Platform/E_Learning_Website_Client/e-learning/src/assets/uploads";

    private final UsersDAO usersDAO;

    public ProfileService(UsersDAO usersDAO) {
        this.usersDAO = usersDAO;
    }

    public Users updateProfile(Long userId, String bio, String contactInfo, String firstName, String lastName) {
        Users user = usersDAO.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        user.setBio(bio);
        user.setContactInfo(contactInfo);
        user.setFirstname(firstName);
        user.setLastname(lastName); 

        return usersDAO.save(user);
    }

    public Users uploadProfilePicture(Long userId, MultipartFile file) throws IOException {
        Users user = usersDAO.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        // Define the path to save the profile picture
        String fileName = user.getUserId() + "_" + file.getOriginalFilename();
        Path path = Paths.get(uploadDir, fileName);

        // Create directories if they don't exist
        Files.createDirectories(path.getParent());

        // Save the image to the specified path
        Files.write(path, file.getBytes());

        // Store the file path in the user object
        user.setProfilePic(path.toString());

        // Save the updated user with the new profile picture
        return usersDAO.save(user);
    }
}
