package com.elearning.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.EnrollmentDAO;
import com.elearning.dtos.CourseProgressDTO;
import com.elearning.dtos.EnrollmentResponseDTO;
import com.elearning.dtos.ModuleResponseDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EnrollmentServiceImpl implements EnrollmentService{

	@Autowired
	private EnrollmentDAO enrollDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<EnrollmentResponseDTO> getEnrollCourse(Long studentId) {
		return enrollDao.findCourseDetailsByStudentId(studentId);
	}
	
	public List<CourseProgressDTO> getCourseProgressByStudentId(Long studentId) {
        return enrollDao.findCourseProgressByStudentId(studentId);
    }
	
	 public List<ModuleResponseDTO> getModulesByCourseId(Long courseId) {
	        return enrollDao.findModulesByCourseId(courseId);
	    }
}
