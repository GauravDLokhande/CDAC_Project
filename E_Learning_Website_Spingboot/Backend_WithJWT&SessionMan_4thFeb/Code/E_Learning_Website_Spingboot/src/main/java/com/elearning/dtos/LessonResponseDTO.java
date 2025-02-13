package com.elearning.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class LessonResponseDTO {
	
	private Long lessonId;
    private String lessonTitle;
    private String lessonContent;

    public LessonResponseDTO(String lessonTitle, String lessonContent, Long lessonId) {
        this.lessonTitle = lessonTitle;
        this.lessonContent = lessonContent;
        this.lessonId = lessonId;
    }
    
    public String getLessonTitle() {
        return lessonTitle;
    }

    public void setLessonTitle(String lessonTitle) {
        this.lessonTitle = lessonTitle;
    }

    public String getLessonContent() {
        return lessonContent;
    }

    public void setLessonContent(String lessonContent) {
        this.lessonContent = lessonContent;
    }
}
