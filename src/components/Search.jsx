import React from 'react'
import "./Search.css"
import Data from '@/Shared/Data';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CiSearch } from "react-icons/ci"; 

const Search = () => {
  return (
    <div>
        <div className='search'>
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Cars" />
            </SelectTrigger>
            <SelectContent className='search-content'>
                <SelectItem value="light" className="dropdown-item">New</SelectItem>
                <SelectItem value="dark" className="dropdown-item">Old</SelectItem>
            </SelectContent>
        </Select>

        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Car Makes" />
            </SelectTrigger>
            <SelectContent className="search-content">
                {Data.CarMakes.map((maker,index)=>(
                    <SelectItem value={maker.name} className="dropdown-item">{maker.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent className="search-content">
                {Data.Pricing.map((price,index)=>(
                    <SelectItem value={price.amount} className="dropdown-item">{price.amount}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        <div className='icon'>
            <CiSearch className='icon2'/>
        </div>
        </div>
    </div>
  )
}

export default Search
