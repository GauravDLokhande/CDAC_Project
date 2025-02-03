package com.elearning.dtos;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ModuleUpdateDto {



		
		private Long moduleId;
		
		private String moduleName;
		
		private String moduleDescription;
		
	}

	
	

