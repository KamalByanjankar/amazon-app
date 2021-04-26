import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({image, title, price, rating}) {
    const [ , dispatch] = useStateValue()

    const removeBasketItem = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            title: title,
        })
    }

    return (
        <div className="checkoutProduct">
            <img 
                className="checkoutProduct__image"
                src={image}
                alt="Image"
            />

            <div className="checkoutProduct__info">
                <p 
                    className="checkoutProduct__title"
                >
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span key={i} className="fa fa-star checked"></span>
                    ))}
                </div>

                <button onClick={removeBasketItem}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
