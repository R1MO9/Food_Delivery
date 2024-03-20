package com.fooddelivery.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/dashboard")
public class AdminProfileController {

    @GetMapping("/profile")
    public String displayProfilePage() {
        return "profile.html";
    }
}
