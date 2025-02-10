package com.elearning.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.elearning.dao.CourseDAO;
import com.elearning.dao.ModuleDao;
import com.elearning.dtos.CourseRespDto;
import com.elearning.pojos.Courses;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class InstructorServiceImpl implements InstructorService {

	@Autowired
	ModuleDao moduleDao;
	
	@Autowired
	CourseDAO courseDao;
	
//	@Autowired
//	lessonDao lessonDao;
	
	@Autowired 
	ModelMapper modelmapper;

	
	@Override
	public List<CourseRespDto> getCoursesByInstructorId(Long instructorId) {

		List<Courses> courses =	courseDao.findByInstructorId(instructorId);
		 List<CourseRespDto> courseRespDtos = courses.stream()
			        .map(course -> modelmapper.map(course, CourseRespDto.class)) 
			        .collect(Collectors.toList());  

			    return courseRespDtos;
		
	}
	
	
	
	
	@Override
	public CourseRespDto getCourseByInstructorAndCourseId(Long instructorId, Long courseId) {

        Courses course = courseDao.findByInstructorIdAndCourseId(instructorId, courseId);

        if (course != null) {
            return modelmapper.map(course, CourseRespDto.class);
        }

		
		return null;
	}
	
	
	
	
	
	
	
	
	

//	  @Override
//	    public List<Modules> getAllModules() {
//	        return moduleDao.findAll();  // Get all modules from database
//	    }
//	  
//	  
//	  
//
//	    // Get modules by course ID
//	    public List<Modules> getModulesByCourseId(Long courseId) {
//	        return moduleDao.findByCourse_CourseId(courseId);  // Assuming the repository method is implemented
//	    }
//
//	
//	@Override
//	public ApiResponse addNewModule(ModuleReqDto moduleReqDto) {
//
//		
//		Courses course = courseDao.findById(moduleReqDto.getCourseId()).orElseThrow(()->new ResourceNotFoundException("Course not found Exception!!!"));
//		
//		Modules module = new Modules();
//		
//		module.setCourse(course);
//		
//		moduleDao.save(module);
//		return new ApiResponse("New module Added!!!");
//		
//		
//		
//	}
//	
//	@Override
//	  public ApiResponse updateModule(Long moduleId, ModuleUpdateDto moduleUpdateDto) {
//	        Modules module = moduleDao.findById(moduleId)
//	                .orElseThrow(() -> new RuntimeException("Module not found"));
//
//	        if (moduleUpdateDto.getModuleName() != null) {
//	            module.setModuleName(moduleUpdateDto.getModuleName());
//	        }
//	        if (moduleUpdateDto.getModuleDescription() != null) {
//	            module.setModuleDescription(moduleUpdateDto.getModuleDescription());
//	        }
//
//	         moduleDao.save(module);
//	         
//	         return new ApiResponse("Module Updated!!!");
//	         
//	    }
//
//	@Override
//	public ApiResponse deleteModule(Long moduleId) {
//	    Modules module = moduleDao.findById(moduleId)
//	            .orElseThrow(() -> new ResourceNotFoundException("Module not found!!!"));
//
//	    moduleDao.delete(module);
//	    
//	    return new ApiResponse("Module Deleted Successfully!!!");
//	
//}
//	
//	
//	 @Override
//	    public ApiResponse addNewLesson(LessonReqDto lessonReqDto) {
//	        // Find module by ID (this will throw an exception if not found)
//	        Modules module = moduleDao.findById(lessonReqDto.getModuleId())
//	            .orElseThrow(() -> new ResourceNotFoundException("Module not found"));
//
//	        // Create a new lesson object
//	        Lessons lesson = new Lessons();
//	        lesson.setLessonId(lessonReqDto.getLessonId());  // Set lesson ID
//	        lesson.setLessonModule(module);  // Set the associated module
//	        lesson.setLessonTitle(lessonReqDto.getLessonTitle());  // Set the lesson title
//	        lesson.setLessonContent(lessonReqDto.getLessonContent());  // Set the lesson content
//
//	        // Save the lesson to the database
//	        lessonDao.save(lesson);
//
//	        // Return response indicating the lesson was successfully added
//	        return new ApiResponse("New lesson added successfully!");
//	    }
//	
//	 @Override
//	    public ApiResponse updateLesson(Long lessonId, LessonUpdateDto lessonUpdateDto) {
//	        Lessons lesson = lessonDao.findById(lessonId)
//	            .orElseThrow(() -> new ResourceNotFoundException("Lesson not found"));
//
//	        // Update lesson fields based on provided data
//	        if (lessonUpdateDto.getLessonTitle() != null) {
//	            lesson.setLessonTitle(lessonUpdateDto.getLessonTitle());
//	        }
//	        if (lessonUpdateDto.getLessonContent() != null) {
//	            lesson.setLessonContent(lessonUpdateDto.getLessonContent());
//	        }
//
//	        lessonDao.save(lesson); // Save updated lesson
//
//	        return new ApiResponse("Lesson updated successfully!");
//	    }
//
//	    // Delete lesson
//	    @Override
//	    public ApiResponse deleteLesson(Long lessonId) {
//	        Lessons lesson = lessonDao.findById(lessonId)
//	            .orElseThrow(() -> new ResourceNotFoundException("Lesson not found"));
//
//	        lessonDao.delete(lesson); // Delete lesson from database
//
//	        return new ApiResponse("Lesson deleted successfully!");
//	    }
//




	
	
	
	
	


}
