import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { noop } from 'rxjs';
@Component({
  selector: 'app-widgettwo',
  templateUrl: './widgettwo.component.html',
  styleUrl: './widgettwo.component.css'
})
export class WidgettwoComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      plotBackgroundColor: '',
      plotBorderColor: 'transparent',
      plotBorderWidth: 0,
     
    },
    title: {
      text: " ",
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yAxis: {
      visible: false,
    },
    series: [
      {
        type: 'line',
        name: 'Line 1',
        data: [1, 4, 2, 5, 8, 9, 0],
        color: 'tomato',
        lineWidth: 3,
      },
      {
        type: 'line',
        name: 'Line 2',
        data: [2, 3, 1, 6, 8, 9, 9],
        color: 'blue',
        lineWidth: 3,
      },

    ],
  };

  //barchart
  chartOption: Highcharts.Options = {
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
      plotBackgroundColor: '',
      plotBorderColor: 'transparent',
      plotBorderWidth: 0,

    },
    title: {
      text: " ",
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yAxis: {
      visible: false,
    },
    series: [
      {
        type: 'bar',
        name: 'Line 1',
        data: [1, 4, 2, 5, 8, 9, 0],
        color: 'tomato',
        
      },
      {
        type: 'bar',
        name: 'Line 2',
        data: [2, 3, 1, 6, 8, 9, 9],
        color: 'blue',
        
      },

    ],
  };

}
