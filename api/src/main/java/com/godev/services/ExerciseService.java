package com.godev.services;

import com.godev.models.User;
import com.godev.repository.ExerciseRepository;
import com.godev.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;

@Service
public class ExerciseService {
    private static final Character[] VALID_ANSWERS = new Character[]{'A', 'B', 'C', 'D', 'E'};

    private final ExerciseRepository exerciseRepository;
    private final UserRepository userRepository;

    public ExerciseService(ExerciseRepository exerciseRepository, UserRepository userRepository) {
        this.exerciseRepository = exerciseRepository;
        this.userRepository = userRepository;
    }

    public ResponseEntity<?> updateExerciseProgress(String username, Long exerciseId, Character answer) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        if (Arrays.stream(VALID_ANSWERS).noneMatch(c -> c == answer))
            return ResponseEntity.badRequest().body("Invalid answer: " + answer);

        Optional<Character> completedData = exerciseRepository.isCompleted(username, exerciseId);
        if (completedData.isEmpty())
            exerciseRepository.setAsCompleted(user.getId(), exerciseId, answer);
        else if (answer != completedData.get())
            exerciseRepository.updateAnswer(user.getId(), exerciseId, answer);

        return ResponseEntity.ok(null);
    }
}
