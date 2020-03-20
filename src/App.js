import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MapView from './components/MapView'



function App() {
  return (
    <Router>
      <button className="navButton">
        <Link to="/map">Map</Link>
      </button>

      <Route path="/map" component={MapView} />
    </Router>

  );
}

export default App;
