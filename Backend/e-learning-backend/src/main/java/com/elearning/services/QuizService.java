package com.elearning.services;

import com.elearning.pojos.Question;
import com.elearning.pojos.Quiz;
import com.elearning.pojos.Users;
import com.elearning.pojos.modules;

import jakarta.transaction.Transactional;

import com.elearning.dao.AnswerRepository;
import com.elearning.dao.ModuleDAO;
import com.elearning.dao.QuizRepository;
import com.elearning.dao.UsersDAO;
import com.elearning.dtos.QuizRequestDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class QuizService {   
	
	@Autowired
    private ModuleDAO moduleDAO;  // Inject the module repository

    @Autowired
    private UsersDAO usersDAO;  // Inject the users repository

    @Autowired
    private QuizRepository quizRepository;  // Inject the quiz repository
    
    @Autowired
    private QuestionService questionService;
    

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public Quiz createQuiz(QuizRequestDTO quizDTO) {
        // Fetch the module using the moduleId from the DTO
        modules module = moduleDAO.findById(quizDTO.getModuleId())
                .orElseThrow(() -> new RuntimeException("Module not found"));

        // Fetch the instructor using the instructorId from the DTO
        Users instructor = usersDAO.findById(quizDTO.getInstructorId())
                .orElseThrow(() -> new RuntimeException("Instructor not found"));

        // Create and populate the Quiz entity
        Quiz quiz = new Quiz();
        quiz.setTitle(quizDTO.getTitle());
        quiz.setDescription(quizDTO.getDescription());
        quiz.setModule(module);
        quiz.setInstructor(instructor);
        
        // Save the quiz entity in the repository
        return quizRepository.save(quiz);
    }

//    public void deleteQuiz(Long quizId) {
//        // Fetch the quiz and delete it
//        Quiz quiz = quizRepository.findById(quizId)
//                .orElseThrow(() -> new RuntimeException("Quiz not found"));
//
//        // The cascading will take care of deleting the associated questions, answers, and options
//        quizRepository.delete(quiz);
//    }
    
    public void deleteQuiz(Long quizId) {
        // Fetch and delete related entities before the quiz
        Quiz quiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new RuntimeException("Quiz not found"));

        // Delete associated questions, answers, and options
        List<Question> questions = quiz.getQuestions();
        for (Question question : questions) {
            questionService.delQueOptQuiz(question);
        }

        // Now delete the quiz itself
        quizRepository.delete(quiz);
    }
    
    
    
}
