package com.fooddelivery.service;

import com.fooddelivery.entity.Categories;
import org.bson.types.ObjectId;

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
    public List<Categories> fetchCategories();

    /**
     * @param categoriesDto - categories information you wanted to update
     */
    public void updateCategories(Categories categoriesDto);

    /**
     * @param id - id of categories you wanted to delete
     */
    public void deleteCategories(ObjectId id);
}
