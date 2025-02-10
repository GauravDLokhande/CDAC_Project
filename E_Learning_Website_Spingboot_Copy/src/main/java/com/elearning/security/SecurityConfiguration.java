package com.elearning.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.PutMapping;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    private final CustomJWTAuthenticationFilter customJWTAuthenticationFilter;

    public SecurityConfiguration(CustomJWTAuthenticationFilter customJWTAuthenticationFilter) {
        this.customJWTAuthenticationFilter = customJWTAuthenticationFilter;
    }

    @Bean
    public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(requests -> requests
                .requestMatchers("/courses", "/users/signup", "/users/signin", "/v*/api-doc*/**", "/swagger-ui/**", "/modules/lessons/**", "/instructors/**", "/enrollments/**","/lesson_controller/**","/users/update/**","/recent/**").permitAll()
                .requestMatchers(HttpMethod.OPTIONS).permitAll()
                .requestMatchers("/users/signin","/courses/purchase/**").hasRole("STUDENT")
                .requestMatchers("/courses/add", "/courses/delete","/users/update/**").hasRole("ADMIN")
                .requestMatchers("/instructors/**", "/enrollments/**","/lesson_controller/**","/recent/**").hasRole("INSTRUCTOR")
//                .requestMatchers(HttpMethod.PUT, "/users/update/**").hasAnyRole("STUDENT", "INSTRUCTOR", "ADMIN")

//                @PutMapping("/update/{userId}")
                
                .anyRequest().authenticated())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(customJWTAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();  // No password encoding (not secure for production)
    }
}