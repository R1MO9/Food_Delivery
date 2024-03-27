package com.fooddelivery.service.impl;

import com.fooddelivery.entity.ImageData;
import com.fooddelivery.exceptions.ResourceNotFoundException;
import com.fooddelivery.repository.StorageRepository;
import com.fooddelivery.service.IStorageService;
import com.fooddelivery.utils.ImageUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
@AllArgsConstructor
public class StorageServiceImpl implements IStorageService {

    private StorageRepository storageRepository;

    /**
     * @param file - image file that you wanted to upload
     */
    @Override
    public void uploadImage(MultipartFile file) throws IOException {
        Optional<ImageData> image = storageRepository.findByName(file.getOriginalFilename());

        if (image.isPresent()) {
            return;
        }

        ImageData imageData = ImageData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(ImageUtils.compressImage(file.getBytes()))
                .build();

        storageRepository.save(imageData);
    }

    /**
     * @param fileName - name of the file that you wanted to fetch
     * @return actual file
     */
    @Override
    public byte[] downloadImage(String fileName) {
        Optional<ImageData> imageData = storageRepository.findByName(fileName);

        if (imageData.isPresent()) {
            return imageData.map(data -> ImageUtils.decompressImage(data.getImageData())).orElse(null);
        }
        else {
            return null;
        }
    }

    @Override
    public void deleteImage(String fileName) {
        Optional<ImageData> imageData = storageRepository.findByName(fileName);
        if (imageData.isPresent()) {
            storageRepository.deleteByName(fileName);
        }
        else {
            return;
        }
    }

}
