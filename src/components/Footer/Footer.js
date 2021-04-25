import React from 'react'
import './Footer.css';


function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }


    return (
        <div className="footer">
            <div className="footer__container">
                <p 
                    className="footer__link"
                    onClick={scrollTop}
                >    
                    Back to top
                </p>

                <div className="footer__lists">
                    <div className="footer__listColumn">
                        <h4 className="footer__ListHeader">Get to Know Us</h4>
                        <p>Careers</p>
                        <p>Press Releases</p>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Sustainability</p>
                        <p>Amazon Logistikblog</p>
                        <p>Imprint</p>
                    </div>

                    <div className="footer__listColumn">
                        <h4 className="footer__ListHeader">Make Money with Us</h4>
                        <p>Sell on Amazon</p>
                        <p>Sell Under Private Brands</p>
                        <p>Sell on Amazon Business</p>
                        <p>Sell on Amazon Handmade</p>
                        <p>Associates Programme</p>
                        <p>Fulfilment by Amazon</p>
                        <p>Seller Fulfilled Prime</p>
                        <p>Advertise Your Products</p>
                        <p>Independently Publish with Us</p>
                        <p>Amazon Pay</p>
                        <p>Host an Amazon Hub</p>
                    </div>

                    <div className="footer__listColumn">
                        <h4 className="footer__ListHeader">Amazon Payment Methods</h4>
                        <p>Amazon Visa Card</p>
                        <p>Shop with points</p>
                        <p>Credit Card</p>
                        <p>Gift Cards</p>
                        <p>Payment by Invoice</p>
                        <p>Direct Debit</p>
                        <p>Amazon Currency Converter</p>
                        <p>Top Up Your Account</p>
                        <p>Top Up Your Account in Store</p>
                    </div>

                    <div className="footer__listColumn">
                        <h4 className="footer__ListHeader">Let Us Help You</h4>
                        <p>COVID-19 and Amazon</p>
                        <p>Track Packages or View Orders</p>
                        <p>Delivery Rates & Policies</p>
                        <p>Amazon Prime</p>
                        <p>Returns & Replacements</p>
                        <p>Recycling</p>
                        <p>Manage Your Content and Devices</p>
                        <p>Amazon Mobile App</p>
                        <p>Amazon Assistant</p>
                        <p>Customer Service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
