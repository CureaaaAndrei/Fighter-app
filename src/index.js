import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';

import App from './App';
import MuiNavbar from './components/navbar/MuiNavbar';

ReactDOM.render(
    <BrowserRouter>
        <MuiNavbar/>
        <App />
    </BrowserRouter>, document.getElementById('root'));
