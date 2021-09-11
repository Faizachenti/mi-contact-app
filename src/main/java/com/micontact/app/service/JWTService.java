package com.micontact.app.service;

import com.micontact.app.controller.LoginPayload;
import com.micontact.app.model.User;

public class JWTService {
    /**
     * This is fake
     * @param user
     * @return
     */
    public String createJWT(LoginPayload loginPayload) {
        return loginPayload.username + "_" + loginPayload.password;
    }

    public Boolean confirm(String token) {
        String[] tokenParts = token.split("_", 2);
        String username = tokenParts[0];
        String password = tokenParts[1];

        User user = new UserService().getUserByUsername(username);
        return user.getPassword().equals(password);
    }
}
