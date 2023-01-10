package com.godev.repository;

import com.godev.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Query(value = """
            select lesson_id  from users_lesson ul
            join users u on (u.id = ul.user_id)
            where u.username = :username and
            ul.lesson_id in (
              select l.id from lesson l
              join topic t on (t.id = l.topic)
              join "path" p on (p.id = t."path")
              where p.id = :pathId);""", nativeQuery = true)
    List<Long> findUserProgressByPathId(@Param("username") String username, @Param("pathId") Long pathId);
}
