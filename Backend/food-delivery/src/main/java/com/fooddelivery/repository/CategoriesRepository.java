package com.fooddelivery.repository;

import com.fooddelivery.entity.Categories;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriesRepository extends MongoRepository<Categories, ObjectId> {
}
