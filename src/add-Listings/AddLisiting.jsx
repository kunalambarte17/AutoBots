import Header from '@/components/Header'
import React, { useState } from "react";
import "./AddListing.css"
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField';
import DropDown from './components/DropDown';
import TextArea from './components/TextArea';
import features from './../Shared/features.json'
import { db } from './../../configs';
import { CarListing, CarImages } from './../../configs/schema';
import UploadImg from './components/UploadImg';
import { useNavigate } from 'react-router-dom';


function AddLisiting() {

  const [formData, setFormData] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]); // Store uploaded images
  const [isUploading, setIsUploading] = useState(false); 

  const naviagte = useNavigate();

  /**
   * use to capture user input
   * @param {*} name
   * @param {*} value
   * 
   */
  const handleInputChange=(name,value)=>{
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))
    console.log(formData);

  }

  /** 
   * Selected feature List
   * @param {*} name
   * @param {*} value
   * 
   */
  const handleFeatureChange=(name,value)=>{
    setFeatureData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
    console.log(featureData);

  }

  // Receive uploaded images from UploadImg component
  const handleImageUpload = (images) => {
    setUploadedImages(images);
    setIsUploading(false);
  };

  // const onSubmit=async(e)=>{
  //   e.preventDefault();
  //   console.log(formData);
  //   console.log(featureData);

  //   if (uploadedImages.length === 0) {
  //     return;
  //   }

  //   try{
  //     const result = await db.insert(CarListing).values({
  //       ...formData,
  //       features: JSON.stringify(featureData), // Convert featureData to a plain JSON string
  //       images: JSON.stringify(uploadedImages), // Save uploaded images
  //     });
  //     if(result){
  //       console.log("Data Saved")
  //       naviagte("/profile");
  //     }
  //   }catch(e){
  //     console.log("Error",e)
  //   }

  // }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(featureData);
  
    if (uploadedImages.length === 0) {
      console.error("No images uploaded. Please upload at least one image.");
      return;
    }
  
    try {
      const [newListing] = await db.insert(CarListing).values({
        ...formData,
        features: JSON.stringify(featureData), // Convert featureData to JSON
      }).returning({ id: CarListing.id }); // Get the inserted ID
  
      if (!newListing || !newListing.id) {
        console.error("Failed to insert car listing.");
        return;
      }
  
      const carListingId = newListing.id;
      console.log("New Car Listing ID:", carListingId);

      await db.insert(CarImages).values(
        uploadedImages.map((url) => ({
          imageUrl: url,
          carListingId: carListingId, 
        }))
      );
  
      console.log("Car images successfully saved!");

      naviagte("/profile");
    } catch (e) {
      console.error("Error inserting data:", e);
    }
  };
  


  return (
    <div>
      <Header/>
      <div className='px-10 mt-4'>
        <div className="xyz ms-4">
          <h2 className='fw-bold fs-3 mb-4 '>Add New Listing</h2>
        </div>
        <form className='form-t border rounded m-10 mb-4' onSubmit={onSubmit}>
          {/* Car Detail */}
          <div className='mx-10'>
            <h2 className='fs-3 fw-medium m-3'>Car Detail</h2>
            <div className='f-container ms-5 mb-3'>
              {carDetails.carDetails.map((item,index) =>(
                <div key={index}>
                  <label className='mb-1'>{item?.label} {item.required&&<span className='text-danger'>*</span>}</label>
                  {item.fieldType=='text'||item.fieldType=='number'
                  ?<InputField item={item} handleInputChange={handleInputChange}/>
                  :item.fieldType=='dropdown'?<DropDown item={item} handleInputChange={handleInputChange}/>
                  :item.fieldType=='textarea'?<TextArea item={item} handleInputChange={handleInputChange}/>
                  :null}
                </div>
              ))}
            </div>
          </div>
          <hr/>

          {/* Feature List */}
          <div>
            <h2  className='fs-3 fw-medium m-3'>Features</h2>
            <div className='check-box'> 
              {features.features.map((item,index)=>(
                <div key={index} className='checkbox-container d-flex gap-2 mb-2 ms-2'>
                  <input type="checkbox"
                   id="custom-checkbox"
                   className="custom-checkbox"
                   onChange={(e)=>handleFeatureChange(item.name,e.target.checked)} 
                   />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          <hr />

          {/* Car Images */}

          <UploadImg onImageUpload={handleImageUpload} />

          <div className='mt-10 me-4 mb-3 d-flex justify-content-end'>
              <button type='submit' className='btn btn-primary'>Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddLisiting
