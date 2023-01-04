package com.godev.payloads;

import jakarta.validation.constraints.NotBlank;

public class ProfileRequest {
    @NotBlank
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}



