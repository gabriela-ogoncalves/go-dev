package com.godev.services;

import com.godev.models.User;
import com.godev.repository.ExerciseRepository;
import com.godev.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ExerciseService {
    private final ExerciseRepository exerciseRepository;
    private final UserRepository userRepository;

    public ExerciseService(ExerciseRepository exerciseRepository, UserRepository userRepository) {
        this.exerciseRepository = exerciseRepository;
        this.userRepository = userRepository;
    }

    public ResponseEntity<?> updateExerciseProgress(String username, Long exerciseId, Character answer) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        if (exerciseRepository.isCompleted(username, exerciseId))
            exerciseRepository.updateAnswer(user.getId(), exerciseId, answer);
        else
            exerciseRepository.setAsCompleted(user.getId(), exerciseId, answer);

        return ResponseEntity.ok(null);
    }
}
