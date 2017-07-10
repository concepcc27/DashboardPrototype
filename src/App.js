import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {ChartDisplay} from './components/ChartDisplay'

class App extends Component {
	state = {
		projects: []
	};


  componentDidMount() {
   const dataAPI = 'http://localhost:3000';
   axios.get(dataAPI + '/test')
     .then((response) => {
       this.setState({
         projects: response.data
       });
       console.log(response);

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
      <ChartDisplay list={this.state.projects} />
			</div>
    );
  }
}

export default App;
