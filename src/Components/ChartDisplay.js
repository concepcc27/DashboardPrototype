import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

export const ChartDisplay = (props) => {

  const labels = props.list.map(({id}) => id);
  const data1 = props.list.map( ({PreGANum}) => PreGANum);
  const data2 = props.list.map( ({PostGANum}) => PostGANum);

  console.log("chartjs Label: " + labels);

  return (
      <div>
        <Line
          data= {{
            labels,
            datasets: [{
              data: data1,
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
              data: data2,
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
          }}
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
