package com.godev.services;

import com.godev.models.User;
import com.godev.repository.LessonRepository;
import com.godev.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LessonService {
    private final LessonRepository lessonRepository;
    private final UserRepository userRepository;

    public LessonService(LessonRepository lessonRepository, UserRepository userRepository) {
        this.lessonRepository = lessonRepository;
        this.userRepository = userRepository;
    }

    public ResponseEntity<?> updateUserProgress(String username, Long lessonId, Boolean completed) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        if (completed && !lessonRepository.isCompleted(username, lessonId))
                lessonRepository.setAsCompleted(user.getId(), lessonId);
        else if (lessonRepository.isCompleted(username, lessonId))
            lessonRepository.setAsNotCompleted(user.getId(), lessonId);

        return ResponseEntity.ok(null);
    }
}
