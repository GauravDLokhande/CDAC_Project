package com.elearning.pojos;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "quizzes")
public class Quiz {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "quiz_id")
	    private Long id;

	    @Column(name = "quiz_title", nullable = false)
	    private String title;

	    @Column(name = "quiz_description")
	    private String description;

	    @OneToOne
	    @JoinColumn(name = "module_id", nullable = false, unique = true)
	    private modules module;

	    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL,orphanRemoval = true)
	    private List<Question> questions;

	    @ManyToOne
	    @JoinColumn(name = "instructor_id", nullable = false)
	    private Users instructor; // Only instructors can add quizzes
	
}
