package com.elearning.dao;

import com.elearning.pojos.Answer;
import com.elearning.pojos.Question;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

	Optional<Answer> findByQuestion(Question question);
	
    // Custom query method to delete answers by question
    void deleteByQuestion(Question question);

}
