import React from 'react'
import "./Category.css"
import Data from '@/Shared/Data'

function Category() {
  return (
    <div className='category'>
      <h2 className='browse-info'>Browse By Type</h2>

        <div className='category-list'>
            {Data.Category.map((category,index)=>(
                <div className='category-box'>
                    <img src={category.icon} width={35} height={35}/>
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category
