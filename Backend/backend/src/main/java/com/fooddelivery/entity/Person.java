package com.fooddelivery.entity;

import com.mongodb.lang.Nullable;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "person")
@Data
@NoArgsConstructor
public class Person {
    @Id
    private ObjectId personId;

    @Nullable
    private String personName;

    @Nullable
    private String personUsername;

    @Nullable
    private String personEmail;

    @Nullable
    private String personPassword;

    @Nullable
    private String personPhoneNumber;

    @Nullable
    private Address personAddress;

    @Nullable
    private List<Product> personCheckoutProduct;

    @Nullable
    private List<Product> personWishListProduct;

    @Nullable
    private List<Product> personPastBuyProduct;
}
