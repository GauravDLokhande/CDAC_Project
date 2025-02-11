package com.elearning.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OptionDTO {
	
	
	 private Long id;  // Option ID
	    private String text;  // Option Text

	    // Constructor
	    public OptionDTO(Long id, String text) {
	        this.id = id;
	        this.text = text;
	    }

}
