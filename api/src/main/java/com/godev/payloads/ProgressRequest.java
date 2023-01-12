package com.godev.payloads;

public class ProgressRequest {
    private String username;
    private long id;
    private Boolean status;
    private Character answer;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Boolean getStatus() { return status; }

    public void setStatus(Boolean status) { this.status = status; }

    public Character getAnswer() { return answer; }

    public void setAnswer(Character answer) { this.answer = answer; }
}
