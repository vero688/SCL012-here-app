import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/Navbar.css';
import logo from './viwes/imagen/logo.jpeg';
import MapView from './components/MapView';
import NewPag from './viwes/NewPag'
import Form from './viwes/Form';

function App() {
    return (
        <Fragment>
            <Router>
                <div className="Navbar">
                    <div className="container-fluid">

                        <a className="Navbar__brand" href="https://mail.google.com/">
                            <img className="Navbar__brand-logo" src={logo} alt="logo" />
                            <span className="font-weight-light">Pet</span>
                            <span className="font-weight-bold">Places</span>
                        </a>
                        <ul className="Lin-Home">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>    
                        <li className="nav-item">
                            <Link to="/map" className="nav-links">Mapa</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Form" className="nav-lin">Registrarse</Link>
                        </li>
                        </ul>

                    </div>
                </div>

                <Route exact path="/" component={NewPag} />
                <Route path="/map" component={MapView} />
                <Route path="/Form" component={Form} />

            </Router>
        </Fragment>
    );
}

export default App;
