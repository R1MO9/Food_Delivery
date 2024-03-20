package com.fooddelivery.rest.controller;

import com.fooddelivery.entity.Person;
import com.fooddelivery.service.IPersonService;
import com.fooddelivery.service.impl.PersonServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api", produces = {MediaType.APPLICATION_JSON_VALUE})
@AllArgsConstructor
public class PersonController {

    private IPersonService personService;

    @PostMapping("/create")
    public Boolean createUser(@RequestBody Person person) {
        personService.createPerson(person);
        return true;
    }
}
