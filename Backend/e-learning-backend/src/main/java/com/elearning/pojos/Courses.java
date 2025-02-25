package com.elearning.pojos;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString(callSuper = true)
@Getter
@Setter
public class Courses extends BaseEntity {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  // ✅ Auto-generates Course ID
	@Column(name = "course_id", nullable = false, updatable = false)
	private Long courseId;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "course_description")
    private String courseDesc;

    // ✅ Correct Many-to-One Relationship
    @ManyToOne
    @JoinColumn(name = "instructor_id", referencedColumnName = "user_id")
    private Users instructor;

    // Store the course image URL
    @Column(name = "course_image")
    private String courseImageUrl;

    // One course can have multiple enrollments
    @OneToMany(mappedBy = "enrollCourse", cascade = CascadeType.ALL)
    private List<Enrollments> enrollment = new ArrayList<>();

    // Many courses can have the same lesson
    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lessons manyToOneCourseLesson;
    
    @Column(name = "status", nullable = false)
    private boolean status = false; // false means not deleted, true means deleted
}
