package com.fooddelivery.dummy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyController {

    @GetMapping("/hello-world")
    public String sayHello() {
        return "Hello World";
    }
}
