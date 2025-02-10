package com.elearning.dtos;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LessonRequestDto {

    private Long moduleId;
    private String lessonTitle;
    private String lessonContent;
    private String quizTitle;
    private String quizDesc;
    private String assessTitle;
    private String assessType;
    private String lessonVideoPath; // Path for the lesson video file
    private String thumbnailFilePath; // Path for the thumbnail file
}
