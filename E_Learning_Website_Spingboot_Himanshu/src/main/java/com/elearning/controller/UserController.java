package com.elearning.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.dtos.ApiResponse;
import com.elearning.dtos.EmailDto;
import com.elearning.dtos.LoginRequestDto;
import com.elearning.dtos.SetPasswordDto;
import com.elearning.dtos.UserDTO;
import com.elearning.services.CourseService;
import com.elearning.services.OtpService;
import com.elearning.services.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*") 
public class UserController {

	@Autowired
    private OtpService otpService;
	
	@Autowired
	private UserService userService;


	
	@PostMapping("/otpgenerate")
	public ResponseEntity<Map<String, String>> generateOtp(@RequestBody EmailDto emailDto) {
	    Map<String, String> response = new HashMap<>();
	    
	    if (userService.validateUser(emailDto.getEmail())) {
	        String otp = otpService.generateOtp(emailDto.getEmail());
	        response.put("message", "OTP sent to " + emailDto.getEmail());
	        
	        // Return ResponseEntity with 200 OK status
	        return ResponseEntity.ok(response);
	    } else {
	        response.put("message", "Invalid user");
	        return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body(response);
	    }
	}
	
	
    @PostMapping("/otpvalidate")
    public ResponseEntity<Map<String, String>> validateOtp(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        String otp = requestBody.get("otp");

        boolean isValid = otpService.validateOtp(email, otp);
        Map<String, String> response = new HashMap<>();
        response.put("message", isValid ? "OTP verified successfully!" : "Invalid OTP!");

        return ResponseEntity.ok(response);
    }

	
    @PostMapping("/login")
    public ApiResponse login(@RequestBody LoginRequestDto loginRequest) {
        return new ApiResponse(userService.login(loginRequest.getUsername(), loginRequest.getPassword()));
    }
    
    
    @PostMapping("/setpassword")
    public ApiResponse setPassword(@RequestBody SetPasswordDto passDto)
    {
    	System.out.println("Email="+passDto.getEmail());
    	System.out.println("Password="+passDto.getPassword());
    	return new ApiResponse(userService.setPassword(passDto.getEmail(),passDto.getPassword()));
    }
    
		@PostMapping("/createuser")
	    public ApiResponse createUser(@RequestBody UserDTO userDto)
	    {
	    	return new ApiResponse(userService.createUser(userDto));
	    }
	    
	@DeleteMapping("/deleteuser")
	public ApiResponse deleteUser(@RequestBody EmailDto emailDto)
	{
		return new ApiResponse(userService.deleteUser(emailDto.getEmail()));
	}
	
}
