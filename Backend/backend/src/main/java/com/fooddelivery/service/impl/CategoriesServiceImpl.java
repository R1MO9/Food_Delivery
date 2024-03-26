package com.fooddelivery.service.impl;

import com.fooddelivery.dto.CategoryDto;
import com.fooddelivery.dto.CategoryResponseDto;
import com.fooddelivery.entity.Categories;
import com.fooddelivery.exceptions.ResourceNotFoundException;
import com.fooddelivery.repository.CategoriesRepository;
import com.fooddelivery.service.ICategoriesService;
import com.fooddelivery.service.IStorageService;
import com.fooddelivery.utils.ImageUtils;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoriesServiceImpl implements ICategoriesService {

    private CategoriesRepository categoriesRepository;
    private IStorageService storageService;

    public void saveCategory(CategoryDto categoryDto) throws IOException {
        storageService.uploadImage(categoryDto.getFile());
        Categories categories = Categories.builder()
                .name(categoryDto.getName())
                .imageName(categoryDto.getFile().getOriginalFilename())
                .quantity(categoryDto.getQuantity())
                .restaurants(categoryDto.getRestaurants())
                .build();
        categoriesRepository.save(categories);
    }

    public List<CategoryResponseDto> fetchAllCategory() {
        List<CategoryResponseDto> categoryResponseDtoList = new ArrayList<>();
        List<Categories> categoriesList = categoriesRepository.findAll();

        for (Categories categories : categoriesList) {
            CategoryResponseDto categoryResponseDto = new CategoryResponseDto();
            byte[] imageData = storageService.downloadImage(categories.getImageName());
            String image = ImageUtils.generateBase64Image(imageData);
            categoryResponseDto.setId(categories.getId().toString());
            categoryResponseDto.setName(categories.getName());
            categoryResponseDto.setRestaurants(categories.getRestaurants());
            categoryResponseDto.setQuantity(categories.getQuantity());
            categoryResponseDto.setImageName(categories.getImageName());
            categoryResponseDto.setImage(image);
            categoryResponseDtoList.add(categoryResponseDto);
        }

        return categoryResponseDtoList;
    }

    public CategoryResponseDto fetchCategory(ObjectId id) {
        CategoryResponseDto categoryResponseDto = new CategoryResponseDto();
        Optional<Categories> categories = categoriesRepository.findById(id);

        if (categories.isPresent()) {
            Categories category = categories.get();
            byte[] imageData = storageService.downloadImage(category.getImageName());
            String image = ImageUtils.generateBase64Image(imageData);
            categoryResponseDto.setId(category.getId().toString());
            categoryResponseDto.setName(category.getName());
            categoryResponseDto.setRestaurants(category.getRestaurants());
            categoryResponseDto.setQuantity(category.getQuantity());
            categoryResponseDto.setImageName(category.getImageName());
            categoryResponseDto.setImage(image);
            return categoryResponseDto;
        } else {
            throw new ResourceNotFoundException("Categories", "Id", id.toString());
        }
    }

    public static long convertObjectIdToLong(String objectIdString) {
        ObjectId objectId = new ObjectId(objectIdString);
        return Long.parseLong(objectId.toString(), 16);
    }

    public static BigInteger convertObjectIdToBigInteger(String objectIdString) {
        return new BigInteger(objectIdString, 16);
    }

    public static ObjectId convertBigIntegerToObjectId(BigInteger bigInteger) {
        String objectIdString = bigInteger.toString(16);
        return new ObjectId(objectIdString);
    }
}
