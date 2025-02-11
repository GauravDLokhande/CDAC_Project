package com.elearning.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ModuleRequestDto {

    private String moduleName;
    private String moduleDescription;
    private Long courseId;
    
    
}