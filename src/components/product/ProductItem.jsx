import React from 'react'

const ProductItem = (props) => {
  return (
    <div className='product_item'>
        <div className='img_box'>
            <img src={props.img} />
            <div className='product_item_popup'>Подробнее</div>
        </div>
        <p className='title'>{props.title}</p>
        <p className='price'>Цена: {props.price}</p>
        <p className='description'>{props.description}</p>
    </div>
  )
}

export default ProductItem