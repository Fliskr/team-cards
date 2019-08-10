import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CardsPage from "./CardsPage";
import AddCardPage from "./AddCardPage";

function App() {
    return (
        <Router>
            <Route path="/" exact component={CardsPage}/>
            <Route path="/add-card/" component={AddCardPage}/>
        </Router>
    );
}

export default App;
