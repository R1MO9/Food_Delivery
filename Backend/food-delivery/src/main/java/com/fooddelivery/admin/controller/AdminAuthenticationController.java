package com.fooddelivery.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/dashboard")
public class AdminAuthenticationController {

    @GetMapping("/sign-in")
    public String displaySignInPage() {
        return "sign-in.html";
    }

    @GetMapping("/sign-up")
    public String displaySignUpPage() {
        return "sing-up.html";
    }
}
