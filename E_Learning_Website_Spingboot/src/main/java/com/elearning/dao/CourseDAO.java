package com.elearning.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.pojos.courses;

public interface CourseDAO extends JpaRepository<courses, Long>{

}
