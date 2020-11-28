import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Products } from "./pages";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
