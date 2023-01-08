package com.godev.repository;

import com.godev.models.Path;
import org.springframework.data.jpa.repository.JpaRepository;
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
}
