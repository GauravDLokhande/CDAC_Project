package com.elearning.services;

import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class OtpServiceImpl implements OtpService {

	 	@Autowired
	    private JavaMailSender mailSender;

	    private final Map<String, String> otpStorage = new HashMap<>();
	    private final SecureRandom random = new SecureRandom();

	    public String generateOtp(String email) {
	        String otp = String.valueOf(100000 + random.nextInt(900000)); // 6-digit OTP
	        otpStorage.put(email, otp);
	        sendEmail(email, otp);
	        return otp;
	    }

	    public void sendEmail(String toEmail, String otp) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(toEmail);
	        message.setSubject("Your OTP Code");
	        message.setText("Your OTP is: " + otp + ". It is valid for 5 minutes.");
	        mailSender.send(message);
	    }

	    public boolean validateOtp(String email, String otp) {
	        return otp.equals(otpStorage.get(email));
	    }
	
	
}
