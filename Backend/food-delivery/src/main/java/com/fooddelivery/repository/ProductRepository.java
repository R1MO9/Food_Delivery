package com.fooddelivery.repository;

import com.fooddelivery.entity.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductRepository extends MongoRepository<Product, ObjectId> {

    List<Product> findProductByCategory(String category);
}
