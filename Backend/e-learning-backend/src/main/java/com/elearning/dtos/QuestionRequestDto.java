package com.elearning.dtos;

import java.util.List;

import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class QuestionRequestDto {
    private String text;  // The text of the question
    private Long quizId;  // ID of the associated quiz
    private int correctOptionNumber; // Correct option number (1, 2, 3, or 4)
    private String option1; // First option
    private String option2; // Second option
    private String option3; // Third option
    private String option4; // Fourth option
}
