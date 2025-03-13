import React, { useState } from 'react'
import "./UploadImg.css"
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
// import { storage } from 'configs/firebaseConfig';

function UploadImg({onImageUpload}) {
    
    const [selectedFileList, setSelectedFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    const CLOUD_NAME = "djbjndpyd";  //  Replace with your Cloud Name
    const UPLOAD_PRESET = "carupload"; //  Replace with your Upload Preset

    // Handle File Selection
    const onFileSelected = (event) => {
      const files = event.target.files;
      const validFiles = [];

      for (let i = 0; i < files?.length; i++) {
        const file = files[i];
        // File type validation (allow only JPG, JPEG, PNG)
        if (!file.type.match("image/jpeg") && !file.type.match("image/png")) {
          alert("Only JPG, JPEG, and PNG files are allowed.");
          continue;
        }
        validFiles.push(file);
      }
      setSelectedFileList((prev) => [...prev, ...validFiles]);
    };

    const onImageRemove=(image,index)=>{
      const result = selectedFileList.filter((item)=>item!== image)
      setSelectedFileList(result);
    }

    // Upload Images to Cloudinary
    const UploadImages = async () => {
      // if (selectedFileList.length === 0) {
      //   alert("Please select images first!");
      //   return;
      // }

      setUploading(true);

      const uploadPromises = selectedFileList.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET); // Replace with your Cloudinary preset
        formData.append("folder", "car_images");

        try {
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            formData
          );
          return response.data.secure_url; // Return uploaded image URL
        } catch (error) {
          console.error("Upload error:", error);
          return null;
        }
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      const validUrls = uploadedUrls.filter((url) => url !== null);

      if (validUrls.length > 0) {
        onImageUpload(validUrls); // Send uploaded image URLs to parent component
        console.log(validUrls);
      }

      setUploading(false);
      setSelectedFileList([]);
    };

  return (
    <div className='mt-4 ms-3'>
        <h2 className='fs-3 fw-medium mb-3'>Upload Car Images</h2>
        
      <div className='image-box'>
        {selectedFileList.map((image,index)=>(
            <div key={index} className="position-relative">
                <IoMdCloseCircle className='position-absolute m-2 fs-4'
                  onClick={()=>onImageRemove(image)}
                />
                <img src={URL.createObjectURL(image)} className='object-cover rounded' width={220} alt='selected'/>
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
      <button
        className="btn btn-primary mt-1"
        onClick={UploadImages}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Images"}
      </button>
    </div>
  )
}

export default UploadImg
