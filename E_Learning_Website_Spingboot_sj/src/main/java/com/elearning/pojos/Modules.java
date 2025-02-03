package com.elearning.pojos;

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
public class Modules extends BaseEntity{
	
	@Id
	@Column(name = "module_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	
	private Long moduleId;
	
	@ManyToOne
	@JoinColumn(name = "course_id" , nullable = false)
	private Courses course;
	
	@Column(name = "module_name")
	private String moduleName;
	
	@Column(name = "module_description")
	private String moduleDescription;
	
//	 one module can belong to multiple courses
	@OneToMany(mappedBy = "courseModule", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Courses> moduleCourses;
}
