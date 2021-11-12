import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import { Navbar } from "./components/navbar/index";
import { Homepage } from "./components/pages/homepage";
import { WishlistPage } from "./components/pages/wishlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/wishlist">
            <WishlistPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
