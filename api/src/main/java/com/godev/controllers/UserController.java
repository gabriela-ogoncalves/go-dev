package com.godev.controllers;

import com.godev.models.Lesson;
import com.godev.models.User;
import com.godev.payloads.LoginRequest;
import com.godev.payloads.ProgressRequest;
import com.godev.payloads.SignupRequest;
import com.godev.repository.UserRepository;
import com.godev.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        return userService.authenticateUser(
                loginRequest.getUsername(),
                loginRequest.getPassword()
        );
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        return userService.registerUser(
                signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                signUpRequest.getPassword(),
                signUpRequest.getRole()
        );
    }

    @GetMapping("/{username}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userProfile(@PathVariable String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        return ResponseEntity.ok(user);
    }

    @GetMapping("/progress/{username}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userProgress(@PathVariable String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        return ResponseEntity.ok(user.getLessons().stream().map((Lesson::getId)));
    }

    @PostMapping("/progress")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userProgressByPath(@Valid @RequestBody ProgressRequest progressRequest) {
        List<Long> lessonIds = userRepository.findUserProgressByPathId(
                progressRequest.getUsername(), progressRequest.getPathId()
        );

        return ResponseEntity.ok(lessonIds);
    }
}
