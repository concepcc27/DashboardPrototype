import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';

const getRandomInt = (min, max) => ( Math.floor(Math.random() * (max - min + 1)) + min );

const initialChartConfig = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [],
    backgroundColor: [
      '#CCC',
      '#36A2EB',
      '#FFCE56',
      'green',
      'orange',
      'pink',
      'yellow'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      'green',
      'orange',
      'pink',
      'yellow'
    ]
  }]
};

class DynamicDoughnutExample extends Component{

  state = {
    data: [],
    firstChannel: true,
  }

  getInitialChartConfig() {
    if(this.state.firstChannel){
      const dataAPI = 'http://localhost:3000';
      axios.get(dataAPI + '/test')
        .then((response) => {
          initialChartConfig.datasets[0].data = response.data.map( ({PreGANum}) => PreGANum);
          this.setState({ data: initialChartConfig.datasets[0].data })
        })
        .catch( (error) => {
          console.log(error);
        }
      );
    }
    else{
      const dataAPI = 'http://localhost:3001';
      axios.get(dataAPI + '/annually')
        .then((response) => {
          initialChartConfig.datasets[0].data = response.data.map( ({totalVisits}) => totalVisits);
          this.setState({ data: initialChartConfig.datasets[0].data })
        })
        .catch( (error) => {
          console.log(error);
        }
      );
    }
  }

	componentDidMount() {
    this.getInitialChartConfig();
    this.APIInterval = setInterval( () => {
			this.getInitialChartConfig();
      this.setState((prevState, props) => {
        return {firstChannel: !prevState.firstChannel};
      });
		}, 1000);
	}

  componentWillUnmount() {
    clearInterval(this.APIInterval);
    console.log("error doughnut");
  }

  render() {
    return (
      <div>
        <h2>Dynamicly refreshed Doughnut Example</h2>
        <Doughnut data={initialChartConfig} />
      </div>
    );
  }
}

export default DynamicDoughnutExample;
