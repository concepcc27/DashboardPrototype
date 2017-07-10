import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
   const dataAPI = 'http://localhost:3000';
   axios.get(dataAPI + '/changeContrib')
     .then((response) => {
       this.setState({
         projects: response.data
       });
      console.log(this.state.projects);
     })
     .catch( (error) => {
       console.log(error);
     }
   );
  }

  render() {
    return (
      <div className="wrapper">
      <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
