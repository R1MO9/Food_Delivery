package com.fooddelivery.rest.controller;

import com.fooddelivery.constants.FoodDeliveryConstants;
import com.fooddelivery.dto.ResponseDto;
import com.fooddelivery.service.IStorageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/image")
@AllArgsConstructor
public class StorageController {

    private IStorageService storageService;

    @PostMapping
    public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile file) throws IOException {
        storageService.uploadImage(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseDto(FoodDeliveryConstants.STATUS_201, FoodDeliveryConstants.MESSAGE_201));
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<?> downloadImage(@PathVariable String fileName){
        byte[] imageData= storageService.downloadImage(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);

    }
}
