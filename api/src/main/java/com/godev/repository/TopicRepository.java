package com.godev.repository;

import com.godev.models.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Long> {
    @NonNull
    Optional<Topic> findById(@NonNull Long id);
}
