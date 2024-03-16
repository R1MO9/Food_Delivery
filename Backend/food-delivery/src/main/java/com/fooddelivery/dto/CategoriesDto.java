package com.fooddelivery.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

@Schema(
        name = "Categories Dto",
        description = "Categories Object that hold all Response related to categories"
)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoriesDto {
    @Schema(
            description = "id of a categories"
    )
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
