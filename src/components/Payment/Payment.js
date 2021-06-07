import React from 'react'
import './Payment.css';
import {useStateValue} from '../../context/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'

function Payment() {
    const [{user, basket}] = useStateValue()

    return (
        <div className="payment"> 
            <div className="payment__container">
                <h1>Checkout ({basket?.length} items)</h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Street Name, House Number</p>
                        <p>Postcode, Country</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {
                            basket.map(item => {
                                return(
                                    <CheckoutProduct
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* <form>
                            <CardElement />
                        </form> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
