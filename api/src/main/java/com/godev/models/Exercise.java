package com.godev.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import io.hypersistence.utils.hibernate.type.array.StringArrayType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.Type;

@Entity
@Table(name = "exercise")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank
    @Size(max = 50)
    private String name;
    @Size(max = 1000)
    private String description;
    @Type(StringArrayType.class)
    private String[] answers;
    @Column(name = "correct_answer")
    private Character correctAnswer;
    @ManyToOne
    @JoinColumn(name = "topic", nullable = false)
    @JsonBackReference
    private Topic topic;

    public Exercise() {
    }

    public Exercise(long id, String name, String description, String[] answers, Character correctAnswer, Topic topic) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.topic = topic;
    }

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String[] getAnswers() { return answers; }

    public void setAnswers(String[] answers) { this.answers = answers; }

    public Topic getTopic() { return topic; }

    public void setTopic(Topic topic) { this.topic = topic; }

    public Character getCorrectAnswer() { return correctAnswer; }

    public void setCorrectAnswer(Character correctAnswer) { this.correctAnswer = correctAnswer; }
}
