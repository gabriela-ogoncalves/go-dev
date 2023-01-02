package com.godev.payloads;

import jakarta.validation.constraints.NotBlank;

public class ProfileRequest {
    @NotBlank
    private long userid;

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }
}



