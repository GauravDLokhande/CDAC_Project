package com.elearning.services;

public interface OtpService {

    public String generateOtp(String email);
    
    public void sendEmail(String toEmail, String otp);
    
    public boolean validateOtp(String email, String otp);
   	 

	
}