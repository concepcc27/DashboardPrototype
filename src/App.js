import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ChartDisplay from './Components/ChartDisplay';
import DynamicDoughnutExample from './Components/dynamic-doughnut';

class App extends Component {
	state = {
    doughnut: true
	}

  display(){
    if(this.state.doughnut){
      return <DynamicDoughnutExample />;
    }else{
			console.log("display Chart");
      return <ChartDisplay />;
    }
  }

	componentDidMount() {
		this.toggleInterval = setInterval(() => {
 		 {this.toggle()}
 	 	}, 5000)
  }

  toggle(){
		this.setState((prevState) => {
			return {doughnut: !prevState.doughnut};
		});
  }

	componentWillUnmount() {
		clearInterval(this.toggleInterval);
	}

  render() {
    return (
			<div className="wrapper">
        {this.display()}

			</div>
    );
  }
}

export default App;
