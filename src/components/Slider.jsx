import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { AppContext } from '../App';

const Slider = () => {

    const context = React.useContext(AppContext);

    return (
        <div>
            { 
                (context.productList.length > 0)
                    ? <Carousel  className='slider_container'>
                        {
                            context.productList.map(obj=>{
                                return(
                                    <Carousel.Item interval={2500} key={obj._id}>
                                        <img 
                                            className="slider_item_img"
                                            src={obj.img}
                                            alt={obj.title}
                                        />
                                        <Carousel.Caption>
                                            <h3>{obj.title}</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    : ''
            
            }
        </div>
    )
}

export default Slider