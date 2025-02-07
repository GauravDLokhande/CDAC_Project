package com.elearning.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminRequestDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String designation;
    private String bio;
    private String profilePic;
    private Long courseId; // Course to assign
}
