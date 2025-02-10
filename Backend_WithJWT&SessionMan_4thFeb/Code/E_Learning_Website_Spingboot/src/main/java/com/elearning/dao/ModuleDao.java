package com.elearning.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.pojos.Modules;

public interface ModuleDao extends JpaRepository<Modules , Long > {

	List<Modules> findByCourse_CourseId(Long courseId);

}
