package com.godev.repository;

import com.godev.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    @NonNull
    Optional<Exercise> findById(@NonNull Long id);

    @Query(value = """
                select answer from users_exercise ue
                join users u on (u.id = ue.user_id)
                where u.username = :username and ue.exercise_id = :exerciseId
            """, nativeQuery = true)
    Optional<Character> isCompleted(@Param("username") String username, @Param("exerciseId") Long exerciseId);

    @Modifying
    @Transactional
    @Query(value = "insert into users_exercise (user_id, exercise_id, answer) values (:userId, :exerciseId, :answer)", nativeQuery = true)
    void setAsCompleted(@Param("userId") Long userId, @Param("exerciseId") Long exerciseId, @Param("answer") Character answer);

    @Modifying
    @Transactional
    @Query(value = "update users_exercise set answer = :answer where user_id = :userId and exercise_id = :exerciseId", nativeQuery = true)
    void updateAnswer(@Param("userId") Long userId, @Param("exerciseId") Long exerciseId, @Param("answer") Character answer);
}
