import { Injectable } from '@angular/core';
import { CpuDetails } from "../models/cpu-details";
import {CpuDetailsService} from "./cpu-details.service";

@Injectable({
  providedIn: 'root'
})
export class GenerateChartsService {

  barsColor: string[] = [];
  barChartLabels: String[] = [];
  chartData: number[] = [];
  salesChartData = [];
  chartType: string;
  chartLegend: boolean;
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

  constructor(private cpuDetailsService: CpuDetailsService) { }

  initializeChart(chartType) {
    this.barChartLabels = [];
    this.chartData = [];
    this.amdData = [];
    this.intelData = [];

    this.chartType = chartType;
    this.chartLegend = false;
    this.barChartData = [
      {data: this.chartData, label: 'Sales', backgroundColor: this.barsColor}
    ];

    this.salesChartData = [
      {data: this.amdData, label: 'AMD Sales', backgroundColor: this.amdColor, fill: false},
      {data: this.intelData, label: 'Intel Sales', backgroundColor: this.intelColor, fill: false}
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

  loadCompaniesCpuDetails(details: Array<CpuDetails>, index: number) {
    this.amdData[index] = details.filter(details => details.cpu.companyName == "AMD")
      .map(details => details.sales).reduce((prev, curr) => prev + curr, 0);
    this.intelData[index] = details.filter(details => details.cpu.companyName == "Intel")
      .map(details => details.sales).reduce((prev, curr) => prev + curr, 0);
  }
}
