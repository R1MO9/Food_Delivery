package com.fooddelivery.rest.controller;

import com.fooddelivery.constants.FoodDeliveryConstants;
import com.fooddelivery.dto.ErrorResponseDto;
import com.fooddelivery.dto.ResponseDto;
import com.fooddelivery.entity.Product;
import com.fooddelivery.service.IProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(
        name = "CRUD REST APIs for Products",
        description = "CRUD REST APIs in Product to CREATE, UPDATE, FETCH AND DELETE Products details"
)
@RestController
@RequestMapping(value = "/api", produces = {MediaType.APPLICATION_JSON_VALUE})
@AllArgsConstructor
public class ProductController {

    private IProductService productService;

    @Operation(
            summary = "Add Single Product REST API",
            description = "REST API to add a new product"
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "201",
                    description = "HTTP Status CREATED"
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
    @PostMapping("/add/single-product")
    public ResponseEntity<ResponseDto> addSingleProduct(@RequestBody Product product) {
        productService.addSingleProduct(product);
        return new ResponseEntity<>(new ResponseDto(FoodDeliveryConstants.STATUS_201, FoodDeliveryConstants.MESSAGE_201), HttpStatus.CREATED);
    }

    @Operation(
            summary = "Add List of Product REST API",
            description = "REST API to add a list of product"
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "201",
                    description = "HTTP Status CREATED"
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
    @PostMapping("/add/list-products")
    public ResponseEntity<ResponseDto> addListOfProducts(@RequestBody List<Product> productList) {
        productService.addListOfProducts(productList);
        return new ResponseEntity<>(new ResponseDto(FoodDeliveryConstants.STATUS_201, FoodDeliveryConstants.MESSAGE_201), HttpStatus.CREATED);
    }

    @Operation(
            summary = "Fetch all products REST API",
            description = "REST API fetch all product"
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
    @GetMapping("/get/all-products")
    public ResponseEntity<List<Product>> fetchAllProducts() {
        List<Product> productList = productService.fetchAllProduct();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @Operation(
            summary = "Fetch A Product By A particular product id - REST API",
            description = "REST API to fetch a specific product"
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
    @GetMapping("/get/product")
    public ResponseEntity<Product> fetchProductById(@RequestParam ObjectId id) {
        Product product = productService.fetchProductById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @Operation(
            summary = "FETCH A List of Product By A particular category - REST API",
            description = "REST API to fetch a list of product using category"
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
    @GetMapping("/get/product/category")
    public ResponseEntity<List<Product>> fetchProductsByCategory(@RequestParam String categoryName) {
        List<Product> productList = productService.fetchProductsByCategory(categoryName);
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @Operation(
            summary = "UPDATE A Product Details by giving new product details - REST API",
            description = "REST API to UPDATE Product details"
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
    @PutMapping("/update/product-details")
    public ResponseEntity<Product> updateProductById(@RequestBody Product product) {
        Product updatedProduct = productService.updateProductById(product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    @Operation(
            summary = "DELETE A Product Details providing by product ID - REST API",
            description = "REST API to DELETE product details"
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
    @DeleteMapping("/delete/product-details")
    public ResponseEntity<ResponseDto> deleteProductById(@RequestParam ObjectId id) {
        productService.deleteProductById(id);
        return new ResponseEntity<>(new ResponseDto(FoodDeliveryConstants.STATUS_200, FoodDeliveryConstants.MESSAGE_200), HttpStatus.OK);
    }

    @Operation(
            summary = "DELETE all Products",
            description = "REST API to DELETE all Product details"
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
    @DeleteMapping("/delete/list-of-products-details")
    public ResponseEntity<ResponseDto> deleteAllProducts() {
        productService.deleteAllProducts();
        return new ResponseEntity<>(new ResponseDto(FoodDeliveryConstants.STATUS_200, FoodDeliveryConstants.MESSAGE_200), HttpStatus.OK);
    }

}
