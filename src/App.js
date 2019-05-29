import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Home from "./components/Home/Home";
import Details from "./components/Detail/Detail";
import { Route, Switch } from 'react-router-dom';

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/details" component={Details} />
                        </Switch>
                    </BrowserRouter>
                </div>
            );
        }
    }
export default App;
