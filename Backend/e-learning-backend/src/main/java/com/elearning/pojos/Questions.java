package com.elearning.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString(callSuper = true)
@Getter
@Setter
public class Questions extends BaseEntity{

	@Id
	@Column(name = "question_id")
	private Long questionId;
	
	@Column(name = "lesson_id")
	private Long lessionId;
	
	@Column(name = "question_text")
	private String questionText;
	
	@Column(name = "question_type")
	private String questionType;
}
