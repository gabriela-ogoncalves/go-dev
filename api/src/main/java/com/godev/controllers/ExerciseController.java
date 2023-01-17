package com.godev.controllers;

import com.godev.models.Exercise;
import com.godev.payloads.ProgressRequest;
import com.godev.repository.ExerciseRepository;
import com.godev.services.ExerciseService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/exercise")
public class ExerciseController {
    private final ExerciseRepository exerciseRepository;
    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseRepository exerciseRepository, ExerciseService exerciseService) {
        this.exerciseRepository = exerciseRepository;
        this.exerciseService = exerciseService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) {
        Exercise exercise = exerciseRepository.findById(Long.valueOf(id))
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Exercise not found: " + id));

        return ResponseEntity.ok(exercise);
    }

    @PostMapping("/progress")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userProgressByLesson(@Valid @RequestBody ProgressRequest progressRequest) {
        Boolean isCompleted = exerciseRepository.isCompleted(
                progressRequest.getUsername(), progressRequest.getId()
        );

        return ResponseEntity.ok(isCompleted);
    }

    @PutMapping("/updateExercise")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateExerciseProgress(@Valid @RequestBody ProgressRequest progressRequest) {
        return exerciseService.updateExerciseProgress(
                progressRequest.getUsername(),
                progressRequest.getId(),
                progressRequest.getAnswer()
        );
    }
}
