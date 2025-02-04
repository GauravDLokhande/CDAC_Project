package com.elearning.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.CourseDAO;
import com.elearning.dao.UsersDAO;
import com.elearning.dtos.CourseRequestDTO;
import com.elearning.dtos.CourseResponseDTO;
import com.elearning.dtos.UserDTO;
import com.elearning.pojos.Courses;
import com.elearning.pojos.Users;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminServices{

	@Autowired 
	private CourseDAO courseDao;
	
	@Autowired
	private UsersDAO userDao;
	
	
	@Autowired
	private ModelMapper modelMapper;
	
	

	@Override
	public List<CourseResponseDTO> getAllCourses() {
		
		return  courseDao.findAll().stream().map(course-> modelMapper.map(course,CourseResponseDTO.class)).collect(Collectors.toList());
		
	}

	@Override
	public String createCourse(CourseRequestDTO courseDto) {
		Courses course=modelMapper.map(courseDto, Courses.class);
		courseDao.save(course);
		return  "Course SuccessFully Added ...";	
	}
	

	
	
}
