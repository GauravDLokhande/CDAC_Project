package com.elearning.dtos;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuizRequestDTO {

	 private String title;
	    private String description;
	    private Long moduleId;  // module ID instead of the full module object
	    private Long instructorId;  // instructor ID instead of the full instructor object

	
}

