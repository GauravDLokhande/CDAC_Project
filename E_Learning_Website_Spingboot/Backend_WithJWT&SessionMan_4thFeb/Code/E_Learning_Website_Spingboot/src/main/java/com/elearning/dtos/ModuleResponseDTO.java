package com.elearning.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ModuleResponseDTO {
    
	private Long moduleId;
    private String moduleName;
    private String moduleDescription;

    public ModuleResponseDTO(String moduleName, String moduleDescription, Long moduleId) {
        this.moduleName = moduleName;
        this.moduleDescription = moduleDescription;
        this.moduleId = moduleId;
    }
}
