import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		projects: []
	};

	componentDidMount () {
	  const dataAPI = 'https://jsonplaceholder.typicode.com';
	  axios.get(dataAPI + '/posts')
	    .then((response) => {
	      this.setState({
	        projects: response.data.slice(0, 12)
	      });
				console.log(error);
	    })
	    .catch( (error) => {
	      console.log(response.data);
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
