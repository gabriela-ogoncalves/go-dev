package com.godev.controllers;

import com.godev.models.Path;
import com.godev.payloads.ProgressRequest;
import com.godev.payloads.ProgressResponse;
import com.godev.repository.PathRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/path")
public class PathController {
    private final PathRepository pathRepository;

    public PathController(PathRepository pathRepository) {
        this.pathRepository = pathRepository;
    }

    @GetMapping("/all")
    public ResponseEntity<?> all() {
        return ResponseEntity.ok(pathRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) {
        Path path = pathRepository.findById(Long.valueOf(id))
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Path not found: " + id));

        return ResponseEntity.ok(path);
    }

    @PostMapping("/progress")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userProgressByPath(@Valid @RequestBody ProgressRequest progressRequest) {
        List<Long> lessonIds = pathRepository.findUserLessonProgressByPathId(
                progressRequest.getUsername(), progressRequest.getId()
        );

        List<Long> exerciseIds = pathRepository.findUserExerciseProgressByPathId(
                progressRequest.getUsername(), progressRequest.getId()
        );

        ProgressResponse progressResponse = new ProgressResponse(progressRequest.getUsername());
        progressResponse.completedLessonIds.addAll(lessonIds);
        progressResponse.completedExerciseIds.addAll(exerciseIds);
        return ResponseEntity.ok(progressResponse);
    }
}
