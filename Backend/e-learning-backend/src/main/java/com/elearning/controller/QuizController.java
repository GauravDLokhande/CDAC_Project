package com.elearning.controller;

import com.elearning.pojos.Quiz;
import com.elearning.pojos.Question;
import com.elearning.dtos.AnswerRequestDto;
import com.elearning.dtos.QuestionDto;
import com.elearning.dtos.QuestionRequestDto;
import com.elearning.dtos.QuizRequestDTO;
import com.elearning.pojos.Answer;
import com.elearning.services.QuizService;
import com.elearning.services.QuestionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

	@Autowired
    private  QuizService quizService;
	@Autowired
	private QuestionService questionService;

    /** CREATE QUIZ - Only Instructors can create a quiz */
    @PostMapping("/create")
    public ResponseEntity<Quiz> createQuiz(@RequestBody QuizRequestDTO quiz) {
        Quiz newQuiz = quizService.createQuiz(quiz);
        return ResponseEntity.ok(newQuiz);
    }

    /** DELETE QUIZ */
    @DeleteMapping("/delete/{quizId}")
    public ResponseEntity<String> deleteQuiz(@PathVariable Long quizId) {
        quizService.deleteQuiz(quizId);
        return ResponseEntity.ok("Quiz deleted successfully");
    }


    /** 3️⃣ ADD QUESTION TO QUIZ */
    @PostMapping("/{quizId}/add-question")
    public ResponseEntity<String> addQuestionToQuiz(@PathVariable Long quizId, @RequestBody QuestionRequestDto question) {
    	System.out.println(question.getText());
    	System.out.println("Number..="+question.getCorrectOptionNumber());
        String resp =questionService.addQuestion(quizId, question);
        return ResponseEntity.ok(resp);
    }

    /** 4️⃣ SET ANSWER FOR A QUESTION */
    @PostMapping("/set-answer/{questionId}")
    public ResponseEntity<String> setAnswer(@PathVariable Long questionId, @RequestBody String  ansText) {
        try {
            questionService.setCorrectAnswer(questionId, ansText);
            return ResponseEntity.ok("Answer Updated Successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }


    /** 5️⃣ GET ALL QUESTIONS FOR A QUIZ (SEQUENTIALLY) */
    @GetMapping("/{quizId}/questions")
    public List<QuestionDto> getQuestions(@PathVariable Long quizId) {
        return questionService.getQuestionsByQuizId(quizId); // Fetch questions by quizId
    }
}
