import { Injectable } from '@angular/core';
import { CpuDetails } from "../models/cpu-details";

@Injectable({
  providedIn: 'root'
})
export class GenerateChartsService {

  barsColor: string[] = [];
  barChartLabels: String[] = [];
  chartData: number[] = [];
  chartType: string;
  barChartLegend: boolean;
  barChartData: any;

  amdData: number[] = [];
  intelData: number[] = [];

  chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  intelColor: string = 'rgba(56, 151, 234, 0.7)';
  amdColor: string = 'rgba(234, 56, 56, 0.7)';

  salesChartData = [
    {data: this.amdData, label: 'AMD Sales', backgroundColor: this.amdColor, fill: false},
    {data: this.intelData, label: 'Intel Sales', backgroundColor: this.intelColor, fill: false}
  ];

  constructor() { }

  initializeChart(chartType) {
    this.barChartLabels = [];
    this.chartData = [];

    this.chartType = chartType;
    this.barChartLegend = false;
    this.barChartData = [
      {data: this.chartData, label: 'Sales', backgroundColor: this.barsColor}
    ];
  }

  loadChartData(cpuDetails: Array<CpuDetails>) {
    cpuDetails.forEach(cpuDetails => {
      this.barChartLabels.push(cpuDetails.cpu.name);
      this.chartData.push(cpuDetails.sales);
      this.changeBarsColor(cpuDetails);
    });
  }

  changeBarsColor(cpuDetails: CpuDetails) {
    if(cpuDetails.cpu.companyName === "AMD") {
      this.barsColor.push(this.amdColor);
    } else if (cpuDetails.cpu.companyName === "Intel") {
      this.barsColor.push(this.intelColor);
    }
  }

  loadCompaniesCpuDetails(details: Array<CpuDetails>) {
    this.amdData.push(details.filter(details => details.cpu.companyName == "AMD")
      .map(details => details.sales).reduce((prev, curr) => prev + curr, 0));
    this.intelData.push(details.filter(details => details.cpu.companyName == "Intel")
      .map(details => details.sales).reduce((prev, curr) => prev + curr, 0));
  }
}
