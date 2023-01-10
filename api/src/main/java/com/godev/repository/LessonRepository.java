package com.godev.repository;

import com.godev.models.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    @NonNull
    Optional<Lesson> findById(@NonNull Long id);

    @Query(value = """
                select
                	case when exists (
                		select 1 from users_lesson ul
                		join users u on (u.id = ul.user_id)
                		where u.username = :username and ul.lesson_id = :lessonId
                	)
                	then 'true'
                	else 'false'
                	end
            """, nativeQuery = true)
    Boolean isCompleted(@Param("username") String username, @Param("lessonId") Long lessonId);
}
