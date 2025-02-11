package com.elearning.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.elearning.pojos.Option;
import com.elearning.pojos.Question;



@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {
    List<Option> findByQuestionId(Long questionId);  // Fetch options for a specific question

    Optional<Option> findByTextAndQuestionId(String text, Long questionId);
    
    // Custom query method to delete options by question
    void deleteByQuestion(Question question);

}
