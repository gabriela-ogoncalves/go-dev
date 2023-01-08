package com.godev.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Set;

@Entity
@Table(name = "topic")
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank
    @Size(max = 50)
    private String name;
    @Size(max = 1000)
    private String description;
    @ManyToOne
    @JoinColumn(name="path", nullable=false)
    @JsonBackReference
    private Path path;
    @OneToMany(mappedBy="topic")
    @JsonManagedReference
    private Set<Lesson> lessons;
    @OneToMany(mappedBy="topic")
    @JsonManagedReference
    private Set<Exercise> exercises;
    public Topic() {    }

    public Topic(long id, String name, String description, Path path, Set<Lesson> lessons, Set<Exercise> exercises) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.path = path;
        this.lessons = lessons;
        this.exercises = exercises;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Path getPath() {
        return path;
    }

    public void setPath(Path path) {
        this.path = path;
    }

    public Set<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(Set<Lesson> lessons) {
        this.lessons = lessons;
    }
}
