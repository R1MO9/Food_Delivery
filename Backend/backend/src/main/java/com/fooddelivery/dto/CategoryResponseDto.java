package com.fooddelivery.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

import java.math.BigInteger;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryResponseDto {
    private String id;
    private String name;
    private String restaurants;
    private String quantity;
    private String imageName;
    private String image;
}
