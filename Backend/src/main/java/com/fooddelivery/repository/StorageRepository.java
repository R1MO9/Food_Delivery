package com.fooddelivery.repository;

import com.fooddelivery.entity.ImageData;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StorageRepository extends MongoRepository<ImageData, ObjectId> {

    Optional<ImageData> findByName(String fileName);

    void deleteByName(String name);
}
