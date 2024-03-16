package com.fooddelivery.mapper;

import com.fooddelivery.dto.CategoriesDto;
import com.fooddelivery.entity.Categories;

public class CategoriesMapper {

    public static CategoriesDto mapToCategoriesDto(CategoriesDto categoriesDto, Categories categories) {
        categoriesDto.setName(categories.getName());
        categoriesDto.setRestaurants(categories.getRestaurants());
        categoriesDto.setImageUrl(categories.getImageUrl());

        return categoriesDto;
    }

    public static Categories mapToCategories(Categories categories, CategoriesDto categoriesDto) {
        categories.setName(categoriesDto.getName());
        categories.setRestaurants(categoriesDto.getRestaurants());
        categories.setImageUrl(categories.getImageUrl());

        return categories;
    }
}
