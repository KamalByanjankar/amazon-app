import React from 'react'
import Product from '../Product/Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-YTMyZjZjMzAt-w1500._CB657354263_.jpg"
                    alt="header"
                />

                <div className="home__row">
                    <Product 
                        id="12345"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={19.99}
                        rating= {4}
                        image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"

                    />
                    <Product 
                        id="2342452"
                        title="Philips UI Coffee Machine"
                        price="299.90"
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81xlewDHCoL._AC_SY879_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="98782734"
                        title="Tommy Hilfiger 1781976 Ladies’ Multi-Dial Quartz Watch with Stainless Steel Strap"
                        price="139.72"
                        rating={4}
                        image="https://m.media-amazon.com/images/I/811ESn6Gk6L._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                        id="23465467"
                        title="Lenovo IdeaPad 3 Chromebook Laptop 35.6 cm (14 Inches, 1366 x 768, HD, Anti-Glare) Slim Notebook (Intel Celeron N4020, 4GB RAM, 64GB eMMC, Intel UHD Graphics 600, ChromeOS) Silver"
                        price="559.99"
                        rating={3}
                        image="https://m.media-amazon.com/images/I/413BhtTJ7nL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                    <Product 
                        id="6564332"
                        title="Vans Women's Wm Ward trainers"
                        price="52.72"
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71qSCIK2uRL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="9832753"
                        title="Dyon LED TV (Triple Tuner (DVB-C/-S2/-T2), Hotel Mode, USB Media Player)"
                        price="219.99"
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81LZI4f4x5L._AC_UY327_FMwebp_QL65_.jpg"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Home
