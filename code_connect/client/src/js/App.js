import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/create-account" component={CreateAccount} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
