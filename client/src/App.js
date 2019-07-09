import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';

// Axios can be used to make Ajax requests
// Fetch, but it's not supported in all browsers

class App extends Component {
  // When the component loads, run this method
  // Out of the box the React server is the root
  componentDidMount() {
    // axios.get('/test')
    //   .then(res => {
    //     console.log(res.data);
    //   });
  }


  render() {
    return (
      <div className="App">
        <h1>Class App!</h1>

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
