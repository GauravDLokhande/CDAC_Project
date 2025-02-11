package com.elearning.dtos;

import lombok.Data;

@Data
public class AnswerRequestDto {
    private Long questionId;
    private Long correctOptionId;
    
}
