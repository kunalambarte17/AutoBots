import React, { useState } from 'react'
import "./UploadImg.css"
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";

function UploadImg({onImageUpload}) {
    
    const [selectedFileList, setSelectedFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadedUrls, setUploadedUrls] = useState([]);

    const CLOUD_NAME = "djbjndpyd";  //  Replace with your Cloud Name
    const UPLOAD_PRESET = "carupload"; //  Replace with your Upload Preset

    // Handle File Selection
    const uploadImages = async (files) => {
      setUploading(true);
  
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
        formData.append("folder", "car_images");
  
        try {
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            formData
          );
          return response.data.secure_url;
        } catch (error) {
          console.error("Upload error:", error);
          return null;
        }
      });
  
      const urls = await Promise.all(uploadPromises);
      const validUrls = urls.filter((url) => url !== null);
  
      if (validUrls.length > 0) {
        setUploadedUrls(validUrls);
        onImageUpload(validUrls); 
        console.log(validUrls)
      }
  
      setUploading(false);
    };
  
    // Handle File Selection & Auto Upload
    const onFileSelected = async (event) => {
      const files = Array.from(event.target.files);
      const validFiles = files.filter((file) =>
        file.type.match(/image\/(jpeg|png|jpg)/)
      );
  
      if (validFiles.length === 0) {
        return;
      }
  
      setSelectedFileList(validFiles);
      await uploadImages(validFiles); // Call uploadImages correctly
    };
  
    // Remove Image from List
    const onImageRemove = (index) => {
      const updatedUrls = [...uploadedUrls];
      updatedUrls.splice(index, 1);
      setUploadedUrls(updatedUrls);
      onImageUpload(updatedUrls); // Update parent with new list
    };

  return (
    <div className='mt-4 ms-3'>
        <h2 className='fs-3 fw-medium mb-3'>Upload Car Images</h2>
        
      <div className='image-box'>
        {uploadedUrls.map((url, index) => (
            <div key={index} className="position-relative">
                <IoMdCloseCircle className='position-absolute m-2 fs-4'
                  onClick={()=>onImageRemove(index)}
                />
                <img src={url} className='object-cover rounded' width={220} alt='selected'/>
            </div>
        ))}

        <div className='contain'>
        <label htmlFor='upload-images'>
            <div className='box border rounded border-primary bg-info bg-gradient p-5 bg-opacity-10'>
                <h2 className='fs-2 text-primary'>+</h2>
            </div>
        </label>
        <br />
        <input type="file" multiple={true} 
        id='upload-images'
        onChange={onFileSelected} 
        className='opacity-0'
        accept="image/jpeg, image/png, image/jpg" // Restrict file types
        />
        </div>
      </div>
    </div>
  )
}

export default UploadImg
