import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CardsPage from "./CardsPage";
import EditCard from "./EditCard";

function App() {
    return (
        <Router>
            <Route path="/" exact component={CardsPage}/>
            <Route path="/add-card/" component={EditCard}/>
            <Route path="/edit-card/:id" component={EditCard}/>
        </Router>
    );
}

export default App;
