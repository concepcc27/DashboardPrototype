import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
   const dataAPI = 'https://jsonplaceholder.typicode.com';
   axios.get(dataAPI + '/posts')
     .then((response) => {
       this.setState({
         projects: response.data.slice(0, 12)
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
