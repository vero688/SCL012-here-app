import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MapView from './components/MapView';
import Layout from './viwes/Layout';
import Badges from './viwes/Badget';
import Navbar from './viwes/Navbar';
import BadgesNew from './viwes/BadgetNew';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar>
       <Route exact path="/" component={Badges}/>
       <Route path="/BadgetNew" component={BadgesNew}/>
       <button className="navButton">
        <Link to="/map">Map</Link>
      </button>
      <Route path="/map" component={MapView} />
       </Navbar>
      </Layout>
    </Router>

  );
}

export default App;