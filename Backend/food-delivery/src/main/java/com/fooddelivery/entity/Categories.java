package com.fooddelivery.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "categories")
@Data
@NoArgsConstructor
public class Categories {
    @Id
    private ObjectId id;
    private String name;
    private String restaurants;
    private String imageUrl;
}
