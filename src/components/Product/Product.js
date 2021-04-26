import React from 'react'
import { useStateValue } from '../../context/StateProvider';
import './Product.css'


function Product({id, title, price, rating, image}) {
    const [ , dispatch ] = useStateValue();

    const addToBasket = () => {
        //add item to the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                price: price, 
                rating: rating,
                image: image,
            },
                
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) =>
                        <span key={i} className="fa fa-star checked"></span>
                    )}
                
                </div>
                <img 
                    className="product__image"
                    src={image}
                    alt="Product"                
                />
            </div>
            <button 
                className="product__button"
                onClick={addToBasket}
            >
                Add to Basket
            </button>
        </div>
    )
}

export default Product
