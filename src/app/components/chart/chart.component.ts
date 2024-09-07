import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartOptions:any = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [],
        type: 'line',
        smooth: true,
        areaStyle: {}
      }
    ],
    tooltip: {
      trigger: 'axis',
      formatter: '{b0}: {c0} استخدام'
    }
  };
  date: Date = new Date();
  selectionData: Array<string> = ['سنويا', 'شهريا'];
  constructor(private _ticket: TicketService){}
  ngOnInit() {
    this.chartOptions.xAxis.data = this._ticket.getGraphData().xAxisData;
    this.chartOptions.series[0].data  = this._ticket.getGraphData().yAxisData;
  }

  selectionChange(data: Event) {
    const dataValue = (data.target as HTMLInputElement).value;
    console.log(dataValue);
  }
}
