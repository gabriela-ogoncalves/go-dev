package com.godev.controllers;

import com.godev.models.User;
import com.godev.payloads.ProfileRequest;
import com.godev.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    private final UserRepository userRepository;

    public ProfileController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userProfile(@Valid @RequestBody ProfileRequest profileRequest) {
        User user = userRepository.findByUsername(profileRequest.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + profileRequest.getUsername()));

        return ResponseEntity.ok(user);
    }
}
