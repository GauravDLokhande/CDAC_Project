package com.elearning.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LessonReqDto {
    private Long lessonId;  // Lesson ID (provided by the user)
    private Long moduleId;  // Module ID to associate the lesson with
    private String lessonTitle;  // Title of the lesson
    private String lessonContent;  // Content of the lesson
}

