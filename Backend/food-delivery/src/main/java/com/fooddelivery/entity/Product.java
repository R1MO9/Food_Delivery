package com.fooddelivery.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "product")
@NoArgsConstructor
public class Product {
    @Id
    private ObjectId productId;
    private String productName;
    private String productDesc;
    private String productPrice;
    private Integer productQuantity;
}
