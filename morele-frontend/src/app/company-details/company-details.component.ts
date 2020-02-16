import { Component, OnInit } from '@angular/core';
import {CpuService} from "../services/cpu.service";
import {CpuDetailsService} from "../services/cpu-details.service";
import {CpuDetails} from "../models/cpu-details";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  dates: string[] = [];
  cpuDetails: CpuDetails[] = [];

  salesChartType = 'line';
  salesChartLegend = false;
  salesChartLabels: string[] = [];
  salesChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
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
  amdData: number[] = [];
  intelData: number[] = [];
  salesColor: string[] = [];
  salesChartData = [
    {data: this.amdData, label: 'AMD Sales', backgroundColor: this.amdColor, fill: false},
    {data: this.intelData, label: 'Intel Sales', backgroundColor: this.intelColor, fill: false}
  ];

  constructor(private cpuService: CpuService,
              private cpuDetailsService: CpuDetailsService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.cpuDetailsService.getAllDates().subscribe(dates => {
      this.salesChartLabels = dates.toString().split(",");
      this.salesChartLabels.forEach(date => {
        this.cpuDetailsService.getCpuDetailsByDate(date).subscribe(details => {
          this.amdData.push(details.filter(details => details.cpu.companyName == "AMD")
            .map(details => details.sales).reduce((prev, curr) => prev + curr, 0));
          this.intelData.push(details.filter(details => details.cpu.companyName == "Intel")
            .map(details => details.sales).reduce((prev, curr) => prev + curr, 0));
        })
      })
    }, error => console.log(error));
  }
}
