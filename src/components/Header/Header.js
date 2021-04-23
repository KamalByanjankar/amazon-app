import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



function Header() {
    return (
        <div className="header">
            <img 
                className="header__logo"
                src="https://boostedmedia.net/wp-content/uploads/2019/11/white-amazon-logo-png-6.png"
                alt="Logo"
            />

            <div className="header__list">
                <span className="header__listOne">
                    Hello
                </span>
                <span className="header__listTwo">
                    Select your address
                </span>
            </div>

            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />

                <SearchIcon 
                    className="header__searchIcon"
                />
            </div>

            <div className="header__nav">
                <div className="header__list">
                    <span className="header__listOne">
                        Hello, Sign in
                    </span>
                    <span className="header__listTwo">
                        Account
                    </span>
                </div>

                <div className="header__list">
                    <span className="header__listOne">
                        Returns
                    </span>
                    <span className="header__listTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__listTwo header__basketCount">0</span>
                </div>
                
            </div>
           
        </div>
    )
}

export default Header