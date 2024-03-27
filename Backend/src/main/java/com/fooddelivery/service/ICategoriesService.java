package com.fooddelivery.service;

import com.fooddelivery.dto.CategoryDto;
import com.fooddelivery.dto.CategoryResponseDto;
import com.fooddelivery.entity.Categories;
import org.bson.types.ObjectId;

import java.io.IOException;
import java.math.BigInteger;
import java.util.List;

public interface ICategoriesService {

    public void saveCategory(CategoryDto categoryDto) throws IOException;
    public List<CategoryResponseDto> fetchAllCategory();
    public CategoryResponseDto fetchCategory(ObjectId id);
    public void updateCategory(CategoryDto categoryDto, ObjectId id) throws IOException;
    public void deleteCategory(ObjectId id);
}
