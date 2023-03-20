package com.godev.payloads;

public class LessonResponse {
    public LessonResponse(long id, String name, String description, String source, long topicId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.source = source;
        this.topicId = topicId;
    }

    public long id;
    public String name;
    public String description;
    public String source;
    public long topicId;
}
