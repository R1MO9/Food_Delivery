package com.fooddelivery.service.impl;

import com.fooddelivery.entity.Person;
import com.fooddelivery.repository.PersonRepository;
import com.fooddelivery.service.IPersonService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PersonServiceImpl implements IPersonService {

    private PersonRepository personRepository;

    public void createPerson(Person person) {
        personRepository.save(person);
    }
}
