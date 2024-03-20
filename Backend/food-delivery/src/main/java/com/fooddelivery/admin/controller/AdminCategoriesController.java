package com.fooddelivery.admin.controller;

import com.fooddelivery.dto.CategoryDto;
import com.fooddelivery.service.ICategoriesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Slf4j
@Controller
@RequestMapping("/admin/dashboard")
public class AdminCategoriesController {

    @Autowired
    private ICategoriesService categoriesService;

    @GetMapping("/category")
    public String displayCategoryPage() {
        return "category.html";
    }

    @GetMapping("/category/add")
    public String displayAddCategoryPage(Model model) {
        model.addAttribute("category",new CategoryDto());
        return "add-category.html";
    }

    @PostMapping(value = "/category/add/save")
    public String displaySaveCategoryPage(@ModelAttribute("category") CategoryDto categoryDto) throws IOException {
        categoriesService.createCategories(categoryDto);
        return "redirect:/admin/dashboard/category";
    }
}
