package com.godev.controllers;

import com.godev.models.Lesson;
import com.godev.payloads.ProgressRequest;
import com.godev.repository.LessonRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/lesson")
public class LessonController {
    private final LessonRepository lessonRepository;

    public LessonController(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) {
        Lesson lesson = lessonRepository.findById(Long.valueOf(id))
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Lesson not found: " + id));

        return ResponseEntity.ok(lesson);
    }

    @PostMapping("/progress")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userProgressByLesson(@Valid @RequestBody ProgressRequest progressRequest) {
        Boolean isCompleted = lessonRepository.isCompleted(
                progressRequest.getUsername(), progressRequest.getId()
        );

        return ResponseEntity.ok(isCompleted);
    }
}
