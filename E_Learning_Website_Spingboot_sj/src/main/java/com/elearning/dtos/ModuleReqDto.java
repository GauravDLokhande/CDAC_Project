package com.elearning.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ModuleReqDto {

	  
		
		private Long courseId;
		
		private Long moduleId;
		
		private String moduleName;
		
		private String moduleDescription;
	}


