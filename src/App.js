import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/Navbar.css';
import './App.css'
import { ButtonGroup, Button } from '@material-ui/core'
import LeafMap from './components/LeafMap';
import NewPag from './viwes/NewPag'
import Form from './viwes/Form';
import LogIn from './firebase/LoginFire';

function App() {
    return (
        <Fragment>
            <header className='header' ></header>
            <Router>
                <div>
                    <Route exact path="/" component={NewPag} />
                    <Route path="/map" component={LeafMap} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/form" component={Form} />

                    <footer className="footer">

                        <ButtonGroup variant="contained" className="fixed-bottom">
                            <div className="container-fluid  flex-xs-row">

                                <Button color="warning">
                                    <Link to="/form" className="nav-link">Iniciar Sesión</Link>
                                </Button>

                                <Button colo="warning">
                                    <Link to="/login" className="nav-link">Registrarse</Link>
                                </Button >

                            </div>
                        </ButtonGroup >
                    </footer>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
