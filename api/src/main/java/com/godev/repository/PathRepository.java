package com.godev.repository;

import com.godev.models.Path;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PathRepository extends JpaRepository<Path, Long> {
    @NonNull
    List<Path> findAll();

    @NonNull
    Optional<Path> findById(@NonNull Long id);

    @Query(value = """
            select lesson_id from users_lesson ul
            join users u on (u.id = ul.user_id)
            where u.username = :username and
            ul.lesson_id in (
              select l.id from lesson l
              join topic t on (t.id = l.topic)
              join "path" p on (p.id = t."path")
              where p.id = :pathId);""", nativeQuery = true)
    List<Long> findUserLessonProgressByPathId(@Param("username") String username, @Param("pathId") Long pathId);

    @Query(value = """
            select exercise_id from users_exercise ue
            join users u on (u.id = ue.user_id)
            where u.username = :username and
            ue.exercise_id in (
              select e.id from exercise e
              join topic t on (t.id = e.topic)
              join "path" p on (p.id = t."path")
              where p.id = :pathId);""", nativeQuery = true)
    List<Long> findUserExerciseProgressByPathId(@Param("username") String username, @Param("pathId") Long pathId);

}
