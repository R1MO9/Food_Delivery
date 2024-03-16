package com.fooddelivery.controller;

import com.fooddelivery.constants.FoodDeliveryConstants;
import com.fooddelivery.dto.CategoriesDto;
import com.fooddelivery.dto.ErrorResponseDto;
import com.fooddelivery.dto.ResponseDto;
import com.fooddelivery.entity.Categories;
import com.fooddelivery.service.ICategoriesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(
        name = "CRUD REST APIs for Categories",
        description = "CRUD REST APIs in Categories to CREATE, UPDATE, FETCH AND DELETE Categories details"
)
@RestController
@RequestMapping(value = "/api/categories")
@AllArgsConstructor
public class CategoriesController {

    private ICategoriesService categoriesService;

    @Operation(
            summary = "Create Categories REST API",
            description = "REST API to create new Categories"
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "201",
                    description = "HTTP Status CREATED"
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "HTTP Status BAD Request"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "HTTP Status Internal Server Error",
                    content = @Content(
                            schema = @Schema(implementation = ErrorResponseDto.class)
                    )
            )
    }
    )
    @PostMapping("/create")
    public ResponseEntity<ResponseDto> createCategories(@RequestBody Categories categories) {
        boolean isTrue = categoriesService.createCategories(categories);

        if (isTrue) {
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(new ResponseDto(FoodDeliveryConstants.STATUS_201, FoodDeliveryConstants.MESSAGE_201));
        } else {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseDto(FoodDeliveryConstants.STATUS_400, FoodDeliveryConstants.MESSAGE_400));
        }
    }

    @Operation(
            summary = "Fetch ALL Categories REST API",
            description = "REST API to Fetch All Categories"
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "HTTP Status OK"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "HTTP Status Internal Server Error",
                    content = @Content(
                            schema = @Schema(implementation = ErrorResponseDto.class)
                    )
            )
    }
    )
    @GetMapping("/fetch")
    public ResponseEntity<List<CategoriesDto>> fetchCategories() {
        List<CategoriesDto> categories = categoriesService.fetchCategories();
        return ResponseEntity.status(HttpStatus.OK).body(categories);
    }

    @Operation(
            summary = "Update Categories REST API",
            description = "REST API to Update a Particular Categories"
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "HTTP Status OK"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "HTTP Status Internal Server Error",
                    content = @Content(
                            schema = @Schema(implementation = ErrorResponseDto.class)
                    )
            )
    }
    )
    @PutMapping("/update")
    public ResponseEntity<ResponseDto> updateCategories(@RequestBody CategoriesDto categoriesDto) {
        categoriesService.updateCategories(categoriesDto);

        return new ResponseEntity<>(
                new ResponseDto(FoodDeliveryConstants.STATUS_200, FoodDeliveryConstants.MESSAGE_200),
                HttpStatus.OK
        );
    }

    @Operation(
            summary = "Delete Categories REST API",
            description = "REST API to Delete a Particular Categories"
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "HTTP Status OK"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "HTTP Status Internal Server Error",
                    content = @Content(
                            schema = @Schema(implementation = ErrorResponseDto.class)
                    )
            )
    }
    )
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseDto> deleteCategories(@PathVariable ObjectId id) {
        categoriesService.deleteCategories(id);
        return new ResponseEntity<>(
                new ResponseDto(FoodDeliveryConstants.STATUS_200, FoodDeliveryConstants.MESSAGE_200),
                HttpStatus.OK
        );
    }
}
