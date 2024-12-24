import React from 'react'
import "./DropDown.css"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function DropDown({item,handleInputChange}) {
  return (
    <div className='dropdown'>
    <Select onValueChange={(value)=>handleInputChange(item.name,value)} required={item.required}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={item.label} />
      </SelectTrigger>
      <SelectContent className='dropdown-content'>
        {item?.options?.map((option,index)=>(
         <SelectItem key={index} value={option} className='dropdown-item'>{option}</SelectItem>
        ))}
 
      </SelectContent>
    </Select>
    </div>
  )
}

export default DropDown
