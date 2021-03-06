import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../context/firebase';



function Header() {
    const [{basket, user}] = useStateValue()

    const handleSignout = () => {
        if(user){
            auth.signOut()
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://boostedmedia.net/wp-content/uploads/2019/11/white-amazon-logo-png-6.png"
                    alt="Amazon"
                />
            </Link>
            
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
                <Link to={!user && "/login"}>
                    <div 
                        className="header__list"
                        onClick={handleSignout}
                    >
                        <span 
                            className="header__listOne"
                        >
                            Hello, {user?.email}
                        </span>
                        <span className="header__listTwo">
                            {user ? "Sign out" : "Sign in"}
                        </span>
                    </div>
                </Link>
                

                <div className="header__list">
                    <span className="header__listOne">
                        Returns
                    </span>
                    <span className="header__listTwo">
                        & Orders
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__listTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
           
        </div>
    )
}

export default Header