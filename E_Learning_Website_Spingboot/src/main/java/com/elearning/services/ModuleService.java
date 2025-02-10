package com.elearning.services;

import com.elearning.pojos.Modules;
import com.elearning.dao.ModuleDao;
import com.elearning.dtos.ModuleResponseDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ModuleService {

    @Autowired
    private ModuleDao moduleDAO;

    
    public List<ModuleResponseDTO> getModulesByCourseId(Long courseId) {
        // Fetch modules based on courseId
        List<Modules> modules = moduleDAO.findByModuleCourse_CourseId(courseId);
        
        // Map the Modules entities to ModuleResponseDTO
        return modules.stream()
            .map(module -> new ModuleResponseDTO(
                module.getModuleName(), 
                module.getModuleDescription(), 
                module.getModuleId()))
            .collect(Collectors.toList());
    }
    
 // Method to fetch a module by its ID
    public Modules getModuleById(Long moduleId) {
        // Fetch the module using the repository
        return moduleDAO.findById(moduleId)
                .orElseThrow(() -> new RuntimeException("Module not found with id: " + moduleId));
    }
    
}
