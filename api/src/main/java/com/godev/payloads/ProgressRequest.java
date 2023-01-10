package com.godev.payloads;

public class ProgressRequest {
    private String username;
    private long id;
    private Boolean status;

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
}
