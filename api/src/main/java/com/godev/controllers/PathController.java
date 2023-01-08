package com.godev.controllers;

import com.godev.models.Path;
import com.godev.repository.PathRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
}
