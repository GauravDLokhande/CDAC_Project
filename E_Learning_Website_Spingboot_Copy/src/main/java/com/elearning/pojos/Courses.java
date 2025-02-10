package com.elearning.pojos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "courses")
@NoArgsConstructor
@ToString(callSuper = true)
@Getter
@Setter

public class Courses extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="course_id")
    private Long courseId;
    
    @Column(name="course_name", nullable = false)
    private String courseName;
    
    @Column(name="course_description")
    private String courseDesc;
    
    // Store the course image URL
    @Column(name = "course_image")
    private String courseImageUrl;
    
    private boolean Status;
    
    // Proper Many-to-One relationship with Users (Instructor)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "instructor_id", nullable = false)
    private Users instructor;

    // One course can have multiple enrollments
    @OneToMany(mappedBy = "enrollCourse", cascade = CascadeType.ALL)
    private List<Enrollments> enrollments = new ArrayList<>();
}
