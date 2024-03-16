package com.fooddelivery.service;

import com.fooddelivery.dto.CategoriesDto;
import com.fooddelivery.entity.Categories;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ICategoriesService {

    /**
     * @param categories - Categories information
     * @return boolean - if categories is created then return true otherwise return false
     */
    public boolean createCategories(Categories categories);

    /**
     * @return CategoriesDto - List of categories
     */
    public List<CategoriesDto> fetchCategories();

    /**
     * @param categoriesDto - categories information you wanted to update
     */
    public void updateCategories(CategoriesDto categoriesDto);

    /**
     * @param id - id of categories you wanted to delete
     */
    public void deleteCategories(ObjectId id);
}
