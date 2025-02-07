package com.elearning.dtos;

public class UserRegPerMonResponseDTO {
    private String monthYear;  // Corresponds to FUNCTION('DATE_FORMAT', u.registrationDate, '%M %Y')
    private Long userCount;    // Corresponds to COUNT(u.userId)

    public UserRegPerMonResponseDTO(String monthYear, Long userCount) {
        this.monthYear = monthYear;
        this.userCount = userCount;
    }

    public String getMonthYear() {
        return monthYear;
    }

    public void setMonthYear(String monthYear) {
        this.monthYear = monthYear;
    }

    public Long getUserCount() {
        return userCount;
    }

    public void setUserCount(Long userCount) {
        this.userCount = userCount;
    }
}
