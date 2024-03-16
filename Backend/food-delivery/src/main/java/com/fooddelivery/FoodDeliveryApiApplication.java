package com.fooddelivery;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
		info = @Info(
				title = "Food Delivery REST API Documentation",
				version = "v1",
				contact = @Contact(
						name = "Prince Kumar",
						email = "princekumar.priku@gmail.com",
						url = "https://princekumar.xyz"
				)
		)
)
public class FoodDeliveryApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodDeliveryApiApplication.class, args);
	}

}
