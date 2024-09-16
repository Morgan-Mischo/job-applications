import React, { Component } from "react";
import "./App.css";
import Navbar from "./comps/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Homepage from './comps/Homepage/Homepage'

export default class App extends Component {

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </Router>
        );
    }
}