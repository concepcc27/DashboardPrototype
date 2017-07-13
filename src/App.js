import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ChartDisplay from './Components/ChartDisplay';
import DynamicDoughnutExample from './Components/dynamic-doughnut';

class App extends Component {
	state = {
    doughnut: true,
		pauseAnimation: false,
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
 		 {this.toggleChart()}
	 	}, 5000);
  }

  toggleChart(){
		this.setState((prevState) => ({
			doughnut: !prevState.doughnut
		}));
  }

	toggleAnimation = () => {
		this.setState( (prevState) => ({
			pauseAnimation: !prevState.pauseAnimation
	 	}));

		console.log("Pause Animation: " + this.state.pauseAnimation);

		if(this.state.pauseAnimation){
			clearInterval(this.toggleInterval);
		}else{
			setInterval( () => {
					{this.toggleChart()}
				}, 5000);
		}
	}

	componentWillUnmount() {
		clearInterval(this.toggleInterval);
	}

  render() {
    return (
			<div className="wrapper">
        {this.display()}
				<br></br>
				<button onClick={this.toggleAnimation}>
					{this.state.pauseAnimation ? "Resume Animation" : "Pause Animation" }
				</button>
			</div>
    );
  }
}

export default App;


// this.setTimeout(
// 	() => { console.log('I do not leak!'); },
// 	5000
// );
