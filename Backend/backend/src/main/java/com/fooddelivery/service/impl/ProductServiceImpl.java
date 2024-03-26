package com.fooddelivery.service.impl;

import com.fooddelivery.entity.Product;
import com.fooddelivery.exceptions.ResourceNotFoundException;
import com.fooddelivery.repository.ProductRepository;
import com.fooddelivery.service.IProductService;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements IProductService {

    private ProductRepository productRepository;

    /**
     * @param product - add a single product details
     */
    @Override
    public void addSingleProduct(Product product) {
        productRepository.save(product);
    }

    /**
     * @param product - add a List of product details
     */
    @Override
    public void addListOfProducts(List<Product> product) {
        productRepository.saveAll(product);
    }

    /**
     * @return List<Product> - return the all available products on db
     */
    @Override
    public List<Product> fetchAllProduct() {
        return productRepository.findAll();
    }

    /**
     * @param id - fetch product by id
     * @return product - it's return a product details available of db, otherwise return a error message
     */
    @Override
    public Product fetchProductById(ObjectId id) {
        Optional<Product> product = productRepository.findById(id);

        if (product.isPresent()) {
            return product.get();
        }
        else {
            throw new ResourceNotFoundException("Product", "Product Id", id.toString());
        }
    }

    /**
     * @param categoryName - category name that you wanted to fetch details
     * @return List<Product> - return list of product available in provided category
     */
    @Override
    public List<Product> fetchProductsByCategory(String category) {
        List<Product> product = productRepository.findProductByCategory(category);
        if(product.isEmpty()) {
            throw new ResourceNotFoundException("Product", "Product Category", category);
        }
        else {
            return product;
        }
    }

    /**
     * @param product - updated product details that want to override previous
     * @return product - return updated product details
     */
    @Override
    public Product updateProductById(Product product) {
        Optional<Product> productEntity = productRepository.findById(product.getProductId());

        if (productEntity.isPresent()) {
            Product productDetails = productEntity.get();
            productDetails.setName(!(productDetails.getName().equals(product.getName())) ? product.getName() : productDetails.getName());
            productDetails.setDesc(!(productDetails.getDesc().equals(product.getDesc())) ? product.getDesc() : productDetails.getDesc());
            productDetails.setCategory(!(productDetails.getCategory().equals(product.getCategory())) ? product.getCategory() : productDetails.getCategory());
            productDetails.setPrice(!(productDetails.getPrice().equals(product.getPrice())) ? product.getPrice() : productDetails.getPrice());
            productDetails.setQuantity(!(productDetails.getQuantity().equals(product.getQuantity())) ? product.getQuantity() : productDetails.getQuantity());
            productDetails.setImageUrl(!(productDetails.getImageUrl().equals(product.getImageUrl())) ? product.getImageUrl() : productDetails.getImageUrl());
            productRepository.save(productDetails);
            return productDetails;
        }
        else {
            throw new ResourceNotFoundException("Product", "Product Id", product.toString());
        }
    }

    /**
     * @param id - product id that you wanted to remove from the database
     */
    @Override
    public void deleteProductById(ObjectId id) {
        Optional<Product> product = productRepository.findById(id);

        if (product.isPresent()) {
            productRepository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("Product", "Product Id", id.toString());
        }
    }

    /**
     *
     */
    @Override
    public void deleteAllProducts() {
        List<Product> product = productRepository.findAll();
        if(product.isEmpty()) {
            throw new ResourceNotFoundException("Product", "Product Category", "List<Product>");
        }
        else {
            productRepository.deleteAll();
        }
    }
}
