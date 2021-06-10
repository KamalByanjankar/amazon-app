import React, { useEffect, useState } from 'react'
import './Payment.css';
import {useStateValue} from '../../context/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../context/reducer';
import axios from '../../context/axios'
import { useHistory } from 'react-router-dom';

function Payment() {
    const [{user, basket}] = useStateValue()
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(null)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setClientSecret] = useState(true)

    const history = useHistory()
    const stripe = useStripe()
    const elements = useElements()

    //for generating stripe secret which allows us to charge a customer
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    // console.log('The secret is >>>>', clientSecret)


    //handles card number and submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment confirmation
            

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }

    //listen for change in Card Element
    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>
                                            Order Total: {value}
                                        </h3>
                                    )}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                />
                                <button
                                    className="payment__paymentButton" 
                                    disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 
                                    "Buy Now"}</span>
                                </button>
                            </div>

                            {/* error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
