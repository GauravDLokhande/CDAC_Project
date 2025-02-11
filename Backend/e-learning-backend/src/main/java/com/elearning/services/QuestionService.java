package com.elearning.services;

import com.elearning.pojos.Question;
import com.elearning.pojos.Answer;
import com.elearning.pojos.Option;
import com.elearning.pojos.Quiz;

import jakarta.transaction.Transactional;

import com.elearning.dao.QuestionRepository;
import com.elearning.dao.QuizRepository;
import com.elearning.dtos.AnswerRequestDto;
import com.elearning.dtos.OptionDTO;
import com.elearning.dtos.QuestionDto;
import com.elearning.dtos.QuestionRequestDto;
import com.elearning.dao.AnswerRepository;
import com.elearning.dao.OptionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class QuestionService {
	@Autowired
    private  QuestionRepository questionRepository;
	@Autowired
	private  QuizRepository quizRepository;
	@Autowired
	private  AnswerRepository answerRepository; 
	@Autowired
	private  OptionRepository optionRepository; 
	
	public String addQuestion(Long quizId, QuestionRequestDto questionDTO) {
	    // Fetch the associated quiz using quizId
	    Quiz quiz = quizRepository.findById(quizId)
	            .orElseThrow(() -> new RuntimeException("Quiz not found"));

	    // Create the Question entity and set its text and quiz
	    Question question = new Question();
	    question.setText(questionDTO.getText());
	    question.setQuiz(quiz);

	    // Create the Options for the question
	    Option option1 = new Option();
	    option1.setText(questionDTO.getOption1());
	    option1.setQuestion(question);

	    Option option2 = new Option();
	    option2.setText(questionDTO.getOption2());
	    option2.setQuestion(question);

	    Option option3 = new Option();
	    option3.setText(questionDTO.getOption3());
	    option3.setQuestion(question);

	    Option option4 = new Option();
	    option4.setText(questionDTO.getOption4());
	    option4.setQuestion(question);

	    // Add the options to the question (cascade will save the options)
	    question.setOptions(List.of(option1, option2, option3, option4));

	    // Create the Answer for the question
	    Answer answer = new Answer();
	    answer.setQuestion(question);  // Link the answer to the question

	    // Set the correct option based on the provided option number
	    Option correctOption = null;
	    
	    System.out.println("ooops:"+questionDTO.getCorrectOptionNumber());
	    
	    switch (questionDTO.getCorrectOptionNumber()) {
	        case 1:
	            correctOption = option1;
	            break;
	        case 2:
	            correctOption = option2;
	            break;
	        case 3:
	            correctOption = option3;
	            break;
	        case 4:
	            correctOption = option4;
	            break;
	        default:
	            throw new RuntimeException("Invalid option number for correct answer");
	    }

	    // Set the correct option in the Answer (now set the entire Option, not just ID)
	    answer.setCorrectOption(correctOption);

	    // Set the answer for the question
	    question.setAnswer(answer);

	    // Save the question (which will also save the associated answer and options due to cascade)
	    questionRepository.save(question);

	    return "Question Added Successfully";
	}


	//pass plain parameters from swagger.......
	public String setCorrectAnswer(Long questionId, String answerText) {
	    // Fetch the question by ID to ensure the question exists
	    Question question = questionRepository.findById(questionId)
	            .orElseThrow(() -> new RuntimeException("Question not found"));

	    // Trim and debug the answerText to see if it matches exactly
	    System.out.println("Answer text received: " + answerText); // Debugging line

	    // Find the option by text that matches the provided answerText
	    Option correctOption = optionRepository.findByTextAndQuestionId(answerText.trim(), questionId)
	            .orElseThrow(() -> new RuntimeException("Option not found for the given question"));

	    // Check if an answer already exists for this question
	    Optional<Answer> existingAnswer = answerRepository.findByQuestion(question);

	    Answer answer;
	    if (existingAnswer.isPresent()) {
	        // Update the existing answer with the new correct option
	        answer = existingAnswer.get();
	        answer.setCorrectOption(correctOption);
	    } else {
	        // Create a new answer if it doesn't exist
	        answer = new Answer();
	        answer.setQuestion(question); // Associate with the question
	        answer.setCorrectOption(correctOption); // Set the correct option
	    }

	    // Save the updated answer in the database
	    answerRepository.save(answer);

	    return "Correct Answer Updated Successfully";
	}
    // Method to convert Option to OptionDTO
    private OptionDTO convertOptionToDTO(Option option) {
        return new OptionDTO(option.getId(), option.getText());
    }

    // Method to convert Question to QuestionDTO
    public QuestionDto convertQuestionToDTO(Question question) {
        List<OptionDTO> optionDTOs = question.getOptions().stream()
                .map(this::convertOptionToDTO)
                .collect(Collectors.toList());
        return new QuestionDto(question.getId(), question.getText(), optionDTOs);
    }

    // Method to fetch all questions by quizId and return them as DTOs
    public List<QuestionDto> getQuestionsByQuizId(Long quizId) {
        List<Question> questions = questionRepository.findByQuizId(quizId);  // Fetch questions by quizId
        return questions.stream()
                .map(this::convertQuestionToDTO)
                .collect(Collectors.toList());
    }    
    
    public void delQueOptQuiz(Question question)
    {
    	answerRepository.deleteByQuestion(question);
        optionRepository.deleteByQuestion(question);
        questionRepository.delete(question);
    }
    
    
}
