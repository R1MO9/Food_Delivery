package com.fooddelivery.controller;

import com.fooddelivery.constants.FoodDeliveryConstants;
import com.fooddelivery.dto.CategoryDto;
import com.fooddelivery.dto.CategoryResponseDto;
import com.fooddelivery.dto.ResponseDto;
import com.fooddelivery.service.ICategoriesService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.Generated;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigInteger;
import java.util.List;

import static org.apache.tomcat.util.http.fileupload.FileUploadBase.MULTIPART_FORM_DATA;

@Tag(
        name = "CRUD REST APIs for Categories",
        description = "CRUD REST APIs in Categories to CREATE, UPDATE, FETCH AND DELETE Categories details"
)
@RestController
@RequestMapping(value = "/api/categories")
@AllArgsConstructor
@CrossOrigin("*")
public class CategoriesController {

    private ICategoriesService categoriesService;

    @PostMapping(value = "/save", consumes = { MULTIPART_FORM_DATA })
    public ResponseEntity<ResponseDto> saveCategory(@RequestPart("categoryDto") CategoryDto categoryDto, @RequestPart("file") MultipartFile file) throws IOException {
        categoryDto.setFile(file);
        categoriesService.saveCategory(categoryDto);
        return new ResponseEntity<>(new ResponseDto(FoodDeliveryConstants.STATUS_201, FoodDeliveryConstants.MESSAGE_201), HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<CategoryResponseDto>> fetchAllCategory() {
        List<CategoryResponseDto> categoryResponseDtoList = categoriesService.fetchAllCategory();
        return new ResponseEntity<>(categoryResponseDtoList, HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<CategoryResponseDto> fetchCategoryById(@RequestParam(value = "id") ObjectId id) {
        CategoryResponseDto categoryResponseDto = categoriesService.fetchCategory(id);
        return new ResponseEntity<>(categoryResponseDto, HttpStatus.OK);
    }
}
