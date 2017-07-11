import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {ChartDisplay} from './Components/ChartDisplay';
import DynamicDoughnutExample from './Components/dynamic-doughnut';

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
        <ChartDisplay list={this.state.projects} />
				<hr />
        <DynamicDoughnutExample list={this.state.projects} />
			</div>
    );
  }
}

export default App;
