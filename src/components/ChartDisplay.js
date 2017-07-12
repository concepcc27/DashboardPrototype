import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';

const chartConfig = {
  labels: [],
  datasets: [{
    data: [],
    label: 'PreGANum',
    borderColor: '#6752ee',
    backgroundColor: 'rgba(123,105,240,0.2)',
    pointRadius: '7',
    pointHoverRadius: '10',
    pointBackgroundColor: 'white',
    pointBorderWidth: '2',
    pointHoverBorderWidth: '3',
  },
  {
    data: [],
    label: 'PostGANum',
    backgroundColor: 'rgba(	0, 182, 254,0.2)',
    borderColor: '#00a4e4',
    pointRadius: '7',
    pointHoverRadius: '10',
    pointBackgroundColor: 'white',
    pointBorderWidth: '2',
    pointHoverBorderWidth: '3',

  }],
  label: 'Numbers'
}

class ChartDisplay extends Component{

  state = {
    data: []
  }

  componentDidMount() {
   const dataAPI = 'http://localhost:3000';
   axios.get(dataAPI + '/test')
     .then((response) => {
       chartConfig.labels = response.data.map(({id}) => id);
       chartConfig.datasets[0].data = response.data.map(({PreGANum}) => PreGANum);
       chartConfig.datasets[1].data = response.data.map(({PostGANum}) => PostGANum);
       this.setState({ data: chartConfig });
     })
     .catch( (error) => {
       console.log( error);
     }
   );
  }

  render() {
    return (
        <div>
          <Line
            data=
              {chartConfig}
            options={{
              title: {
                text: 'Number dont Lie',
                display: true
              }
            }}
          />
        </div>
      )
  }
}

export default ChartDisplay;
