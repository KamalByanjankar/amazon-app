import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './context/firebase';
import { useStateValue } from './context/StateProvider';
import Payment from './components/Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './components/Orders/Orders';


const promise = loadStripe(
  "STRIPE_API_KEY"
)

function App() {
  const [ , dispatch ] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("The current user is --> ", authUser)
    
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />    
            <Home />
            <Footer />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
