package com.elearning.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class InstructorResponseDTO {
    private Long instructorId;
    private String firstName;
    private String lastName;
    private String designation;
    private String bio;
    private String profilePic;
}
