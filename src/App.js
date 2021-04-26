import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
