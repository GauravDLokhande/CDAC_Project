package com.elearning.services;

import com.elearning.dao.AdminDAO;
import com.elearning.dao.FakeInstructorDAO;
import com.elearning.dao.CourseDAO;
import com.elearning.dtos.AdminRequestDTO;
import com.elearning.dtos.AdminResponseDTO;
import com.elearning.dtos.UserRegPerMonResponseDTO;
import com.elearning.pojos.Courses;
import com.elearning.pojos.UserRole;
import com.elearning.pojos.Users;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
@Service
@Transactional
public class AdminServiceImpl implements AdminService{

	@Autowired
    private AdminDAO adminDAO;

//	public List<UserRegPerMonResponseDTO> getRegisteredUserCountsPerMonth() {
//        return adminDAO.getUserCountPerMonth();
//    }

    public List<AdminResponseDTO> getEnrolledUserCountPerCourse() {
        return adminDAO.getEnrolledUserCountPerCourse();
    }
    
}
