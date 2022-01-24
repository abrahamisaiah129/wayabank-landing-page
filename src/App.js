import React from 'react';
import { Home } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact strict component={Home} />
            </div>
        </Router>
    )
}

export default App
