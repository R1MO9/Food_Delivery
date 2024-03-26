package com.fooddelivery.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface IStorageService {
    /**
     *
     * @param file - image file that you wanted to upload
     */
    public void uploadImage(MultipartFile file) throws IOException;

    /**
     *
     * @param fileName - name of the file that you wanted to fetch
     * @return actual file
     */
    public byte[] downloadImage(String fileName);
}
