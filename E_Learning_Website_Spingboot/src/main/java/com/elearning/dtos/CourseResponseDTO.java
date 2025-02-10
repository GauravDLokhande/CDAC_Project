//package com.elearning.dtos;
//
//import jakarta.persistence.Column;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@ToString(callSuper = true)
//public class CourseResponseDTO {
//	
//	private String courseName;
//	private String courseDesc;
//	private String courseImageUrl;
//	
//	public CourseResponseDTO(String courseName, String courseDesc, String courseImageUrl) {
//		super();
//		this.courseName = courseName;
//		this.courseDesc = courseDesc;
//		this.courseImageUrl = courseImageUrl;
//	}
//}


package com.elearning.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class CourseResponseDTO {

	private Long courseId;
    private String courseName;
    private int moduleCount;
    private int studentCount;
    private String status;
    private String lastUpdated;
    private String courseDesc;
    private String courseImageUrl;
    
    

	public CourseResponseDTO(String courseName, String courseDesc, String courseImageUrl) {
		super();
		this.courseName = courseName;
		this.courseDesc = courseDesc;
		this.courseImageUrl = courseImageUrl;
	}

	public CourseResponseDTO(Long courseId, String courseName, int moduleCount, int studentCount, String status, String lastUpdated, String courseDesc, String courseImageUrl) {
        super();
        this.courseId = courseId;
        this.courseName = courseName;
        this.moduleCount = moduleCount;
        this.studentCount = studentCount;
        this.status = status;
        this.lastUpdated = lastUpdated;
        this.courseDesc = courseDesc;
        this.courseImageUrl = courseImageUrl;
    }
	
    
    
    
}






