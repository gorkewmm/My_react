import React from 'react'
import { courses } from './Data'


function Components({ props }) {
  const {id,title ,description,price,link,image} = props
  return (
    <div className='course'>
       
           <img src="{image}" width={210} height={110}/>
           <h4 className='course-title'>{title}</h4>
           <p className='course-desc'>{description}</p>
           <h3 className='course-price'>{price} ₺</h3>
           <div className='course-link'><a className='course-link' href={link}>Satın alın</a></div>
       
    </div>
  )
}

export default Components