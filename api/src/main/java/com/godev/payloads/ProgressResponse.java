package com.godev.payloads;

import com.godev.models.Path;

import java.util.ArrayList;
import java.util.List;

public class ProgressResponse {
    public ProgressResponse(String username) {
        this.username = username;
        this.completedPaths = new ArrayList<>();
        this.completedLessonsPaths = new ArrayList<>();
        this.completedExercisesPaths = new ArrayList<>();
        this.uncompletedPaths = new ArrayList<>();
    }

    public String username;
    public List<Path> completedPaths;
    public List<Path> completedLessonsPaths;
    public List<Path> completedExercisesPaths;
    public List<Path> uncompletedPaths;
    public List<Long> completedLessonIds;
    public List<Long> completedExerciseIds;
}
