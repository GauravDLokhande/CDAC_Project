package com.elearning.dtos;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionDto {
	
	 private Long id;  // Question ID
	 
	    private String text;  // Question Text
	 	
	    private List<OptionDTO> options;  // List of OptionDTO

	    // Constructor
	    public QuestionDto(Long id, String text, List<OptionDTO> options) {
	        this.id = id;
	        this.text = text;
	        this.options = options;
	    }
}
