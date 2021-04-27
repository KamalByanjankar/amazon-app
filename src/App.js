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
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
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
