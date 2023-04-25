import React from 'react'
import { AppContext } from '../../App';
import ProductItem from './ProductItem';

const ProductContainer = () => {

    const context = React.useContext(AppContext);
    // context.productList = [];
    return (
        context.productList.length > 0
            ? <div className='product_list_container'>
                    { 
                        context.productList.map(obj=>{
                            return(
                            <ProductItem
                                key={obj._id}
                                id={obj._id}
                                title={obj.title}
                                description={obj.description}
                                price={obj.price}
                                img={obj.img}
                            />
                            )
                        })
                    }
                </div>
            : <h2 className='no_items'>В настоящее время в магазине отсутствуют товары</h2>
    )
}

export default ProductContainer