import React, { useState } from 'react'
import ProductContainer from './product/ProductContainer';
import Slider from './Slider';

const Content = () => {

    return (
        <div className='main'>
            <Slider />
            <ProductContainer />
        </div>
    )
}

export default Content