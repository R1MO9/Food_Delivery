package com.fooddelivery.service;

import com.fooddelivery.entity.Product;
import org.bson.types.ObjectId;

import java.util.List;

public interface IProductService {

    /**
     *
     * @param product - add a single product details
     */
    public void addSingleProduct(Product product);

    /**
     *
     * @param product - add a List of product details
     */
    public void addListOfProducts(List<Product> product);

    /**
     *
     * @return List<Product> - return the all available products on db
     */
    public List<Product> fetchAllProduct();

    /**
     *
     * @param id - fetch product by id
     * @return product - it's return a product details available of db, otherwise return a error message
     */
    public Product fetchProductById(ObjectId id);

    /**
     *
     * @param categoryName - category name that you wanted to fetch details
     * @return List<Product> - return list of product available in provided category
     */
    public List<Product> fetchProductsByCategory(String categoryName);
    /**
     *
     * @param product - updated product details that want to override previous
     * @return product - return updated product details
     */
    public Product updateProductById(Product product);

    /**
     *
     * @param id - product id that you wanted to remove from the database
     */
    public void deleteProductById(ObjectId id);


    public void deleteAllProducts();
}
