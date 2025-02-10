package com.elearning.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.elearning.dtos.ModuleResponseDTO;
import com.elearning.pojos.Modules;

public interface ModuleDao extends JpaRepository<Modules, Long> {


    // Find Modules by Course ID
    List<Modules> findByModuleCourse_CourseId(Long courseId);
	 
    @Query("SELECT COUNT(m) FROM Modules m WHERE m.moduleCourse.courseId = :courseId")
    int countModulesByCourseId(Long courseId);

    

}
