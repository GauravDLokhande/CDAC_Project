package com.elearning.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.elearning.pojos.Modules;

public interface ModuleDAO extends JpaRepository<Modules, Long> {
}
