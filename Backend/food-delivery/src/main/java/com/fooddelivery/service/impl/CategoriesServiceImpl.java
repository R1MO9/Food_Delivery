package com.fooddelivery.service.impl;

import com.fooddelivery.dto.CategoriesDto;
import com.fooddelivery.entity.Categories;
import com.fooddelivery.exceptions.ResourceNotFoundException;
import com.fooddelivery.repository.CategoriesRepository;
import com.fooddelivery.service.ICategoriesService;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoriesServiceImpl implements ICategoriesService {

    private CategoriesRepository categoriesRepository;

    /**
     * @param categories - Categories information
     * @return boolean - if categories is created then return true otherwise return false
     */
    public boolean createCategories(Categories categories) {
        categoriesRepository.save(categories);
        return true;
    }

    /**
     * @return CategoriesDto - List of categories
     */
    public List<CategoriesDto> fetchCategories() {
        List<Categories> categories = categoriesRepository.findAll();
        List<CategoriesDto> categoriesDto = new ArrayList<>();

        for (Categories item : categories) {
            CategoriesDto category = new CategoriesDto();
            String imagePath = "static/images/categories/" + item.getImageUrl();
            String responseImagePath = "/images/categories/" + item.getImageUrl();
            Resource imageResource = new ClassPathResource(imagePath);

            if (!(imageResource.exists())) {
                category.setImageUrl("not-found.png");
            } else {
                category.setImageUrl(responseImagePath);
            }

            category.setId(item.getId());
            category.setName(item.getName());
            category.setRestaurants(item.getRestaurants());
            // Set the URL or path to the image, not the Resource

            categoriesDto.add(category);
        }
        return categoriesDto;
    }

    /**
     * @param categoriesDto - categories information you wanted to update
     */
    @Override
    public void updateCategories(CategoriesDto categoriesDto) {
        Optional<Categories> categories = categoriesRepository.findById(categoriesDto.getId());

        if (categories.isPresent()) {
            Categories category = categories.get();
            category.setName((!(category.getName().equals(categoriesDto.getName())) ? categoriesDto.getName() : category.getName()));
            category.setRestaurants((!(category.getRestaurants().equals(categoriesDto.getRestaurants())) ? categoriesDto.getRestaurants() : category.getRestaurants()));
            category.setImageUrl((!(category.getImageUrl().equals(categoriesDto.getImageUrl())) ? categoriesDto.getImageUrl() : category.getImageUrl()));
            categoriesRepository.save(category);
        } else {
            throw new ResourceNotFoundException("Categories", "Categories Id", categoriesDto.getId().toString());
        }
    };

    /**
     * @param id - id of categories you wanted to delete
     */
    @Override
    public void deleteCategories(ObjectId id) {
        Optional<Categories> categories = categoriesRepository.findById(id);

        if (categories.isPresent()) {
            categoriesRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Categories", "Categories Id", id.toString());
        }
    };
}