package com.fooddelivery.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Schema(
        name = "Product",
        description = "Schema that holds the product details"
)
@Data
@Document(collection = "product")
@NoArgsConstructor
public class Product {
    @Id
    private ObjectId productId;

    @Schema(
            description = "name of the product."
    )
    private String name;

    @Schema(
            description = "brief description of a product."
    )
    private String desc;

    @Schema(
            description = "price of a product."
    )
    private String price;

    @Schema(
            description = "Available Quantity of a product in a stock."
    )
    private Integer quantity;

    @Schema(
            description = "Available product which category belong to."
    )
    private String category;

    @Schema(
            description = "product image source."
    )
    private String imageUrl;
}
