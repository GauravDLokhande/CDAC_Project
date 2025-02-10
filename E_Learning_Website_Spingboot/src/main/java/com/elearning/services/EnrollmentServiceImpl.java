package com.elearning.services;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.CourseDAO;
import com.elearning.dao.EnrollmentDAO;
import com.elearning.dao.UserDAO;
import com.elearning.dtos.CourseProgressDTO;
import com.elearning.dtos.EnrollmentResponseDTO;
import com.elearning.dtos.ModuleResponseDTO;
import com.elearning.pojos.Courses;
import com.elearning.pojos.Enrollments;
import com.elearning.pojos.Users;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EnrollmentServiceImpl implements EnrollmentService{

	@Autowired
	private EnrollmentDAO enrollDao;
	
	@Autowired
	private CourseDAO courseDao;
	
	@Autowired
	private UserDAO userDao;
	
	
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

	    public String enrollStudent(Long courseId, Long studentId) {
	        Optional<Courses> course = courseDao.findById(courseId);
	        Optional<Users> student = userDao.findById(studentId);

	        if (course.isEmpty()) {
	            return "Course not found!";
	        }
	        if (student.isEmpty()) {
	            return "Student not found!";
	        }

	        // Check if the student is already enrolled
	        Optional<Enrollments> existingEnrollment = enrollDao.findByEnrollCourse_CourseIdAndStudents_UserId(courseId, studentId);
	        if (existingEnrollment.isPresent()) {
	            return "Student is already enrolled in this course!";
	        }

	        // Create a new Enrollment
	        Enrollments enrollment = new Enrollments();
	        enrollment.setEnrollCourse(course.get());
	        enrollment.setStudents(student.get());
	        enrollment.setModuleProgress(BigDecimal.ZERO);
	        enrollment.setLessonProgress(BigDecimal.ZERO);
	        enrollment.setCourseStatus(false);
	        enrollment.setEnrollDate(LocalDate.now());

	        // Save the enrollment
	        enrollDao.save(enrollment);
	        return "Student successfully enrolled!";
	    }
	 
	 
}
