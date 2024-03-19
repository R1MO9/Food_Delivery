package com.fooddelivery.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Schema(
        name = "Categories Dto",
        description = "Categories Object that hold all Response related to categories"
)
@Document(collection = "categories")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Categories {
    @Schema(
            description = "id of a categories"
    )
    @Id
    private ObjectId id;
    @Schema(
            description = "name of a categories"
    )
    private String name;
    @Schema(
            description = "available restaurants of a particular categories"
    )
    private String restaurants;
    @Schema(
            description = "image url of a categories"
    )
    private String imageUrl;
}
