package com.elearning.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.CourseDAO;
import com.elearning.dtos.CourseResponseDTO;

import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
@Service
@Transactional
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDAO courseDAO;
	
	@Autowired
	private ModelMapper modelmapper;
	
	@Override
	public List<CourseResponseDTO> getCourseDetails() {
		
		return courseDAO.findAll()
				.stream().
				map(course -> modelmapper.map(course, CourseResponseDTO.class))
				.collect(Collectors.toList());
	}
				
}
