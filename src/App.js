import React, { Component } from 'react';
import logo from './logo.svg';
import {Display} from './components/Display';
import './App.css';
import axios from 'axios';
import {ChartDisplay} from './components/ChartDisplay'

class App extends Component {
	state = {
		projects: []
	};

<<<<<<< HEAD
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
=======
	componentDidMount () {
	  const dataAPI = 'https://jsonplaceholder.typicode.com';
	  axios.get(dataAPI + '/posts')
	    .then((response) => {
	      this.setState({
	        projects: response.data.slice(0, 12)
	      });
				console.log(response.data);
	    })
	    .catch( (error) => {
        console.log(error);
	    }
	  );
	}
>>>>>>> Dev

  render() {
    return (
			<div className="wrapper">
<<<<<<< HEAD
				<h1>Hello</h1>
      <ChartDisplay list={this.state.projects} />
=======
        <Display elements={this.state.projects}/>
>>>>>>> Dev
			</div>
    );
  }
}

export default App;
