package com.godev.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "lesson")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank
    @Size(max = 50)
    private String name;
    @Size(max = 1000)
    private String description;
    @Size(max = 1000)
    private String source;
    @ManyToOne
    @JoinColumn(name="topic", nullable=false)
    @JsonBackReference
    private Topic topic;

    public Lesson() {    }

    public Lesson(long id, String name, String description, String source, Topic topic) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.source = source;
        this.topic = topic;
    }

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getSource() { return source; }

    public void setSource(String source) { this.source = source; }

    public Topic getTopic() { return topic; }

    public void setTopic(Topic topic) { this.topic = topic; }
}
