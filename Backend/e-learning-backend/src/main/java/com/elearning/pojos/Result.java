package com.elearning.pojos;


import jakarta.persistence.*;

@Entity
@Table(name = "results")
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    private Quiz quiz;

    @ManyToOne
    @JoinColumn(name = "module_id", nullable = false)
    private modules resultModule;

    @Column(name = "total_marks", nullable = false)
    private int totalMarks;

    public Result() {}

    public Result(Users user, Quiz quiz, modules module, int totalMarks) {
        this.user = user;
        this.quiz = quiz;
        this.resultModule = module;
        this.totalMarks = totalMarks;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public modules getModule() {
        return resultModule;
    }

    public void setModule(modules module) {
        this.resultModule = module;
    }

    public int getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(int totalMarks) {
        this.totalMarks = totalMarks;
    }

    @Override
    public String toString() {
        return "Result{" +
                "id=" + id +
                ", user=" + user +
                ", quiz=" + quiz +
                ", module=" + resultModule +
                ", totalMarks=" + totalMarks +
                '}';
    }
}

