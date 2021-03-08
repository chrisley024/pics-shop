import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <div className="App">
      <main className="container">
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route exact path="/">
            <Photos />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
