import React, { useState } from 'react'
import "./UploadImg.css"
import { IoMdCloseCircle } from "react-icons/io";
import { ref } from 'firebase/storage';
// import { storage } from 'configs/firebaseConfig';

function UploadImg() {
    
    const [selectedFileList, setSelectedFileList] = useState([]);

    const onFileSelected=(event)=>{
      const files= event.target.files;
      for(let i=0;i<files?.length;i++){
          const file=files[i];
          setSelectedFileList((prev)=>[...prev,file])
          // const objectUrl = URL.createObjectURL(file); //Create Image into blop
      }
    }
    const onImageRemove=(image,index)=>{
      const result = selectedFileList.filter((item)=>item!=image)
      setSelectedFileList(result);
    }

    const UploadImages=()=>{
      selectedFileList.forEach((file)=>{
        const fileName = Date.now()+'jpeg';
        const storageRef = ref(storage);
        
      })
    }

  return (
    <div className='mt-4 ms-3'>
        <h2 className='fs-3 fw-medium mb-3'>Upload Car Images</h2>
        
      <div className='image-box'>

        {selectedFileList.map((image,index)=>(
            <div key={index} >
                <IoMdCloseCircle className='position-absolute m-2 fs-4'
                  onClick={()=>onImageRemove(image,index)}
                />
                <img src={URL.createObjectURL(image)} className='object-cover rounded' width={220}/>
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
        className='opacity-0'/>
        </div>

      </div>
    </div>
  )
}

export default UploadImg
