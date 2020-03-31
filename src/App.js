import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/Navbar.css';
import LeafMap from './components/LeafMap';
// import MapView from './components/MapView';
import NewPag from './viwes/NewPag'
import Form from './viwes/Form';
import { Container, Card, ButtonGroup, Button } from '@material-ui/core';


function App() {
    return (
        <Fragment>
            {/* <Container  >
                <Card> */}
                    <Router>
                        <Route exact path="/" component={NewPag} />
                        <Route path="/map" component={LeafMap} />
                        <Route path="/form" component={Form} />

                        {/* <ButtonGroup color="warning" variant="contained" className="navbar navbar-fixed-bottom"> */}
                            <div className="container-fluid flex-xs-row">

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/form" className="nav-link">Iniciar Sesión</Link>
                                </li>

                            </div>
                        {/* </ButtonGroup > */}
                    </Router>
                {/* </Card>
            </Container> */}
        </Fragment>
    );
}

export default App;
