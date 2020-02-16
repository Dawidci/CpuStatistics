import { Component, OnInit } from '@angular/core';
import { Cpu } from "../../models/cpu";
import { CpuService } from "../../services/cpu.service";
import { Router, ActivatedRoute } from '@angular/router';
import {CpuDetails} from "../../models/cpu-details";
import {CpuDetailsService} from "../../services/cpu-details.service";

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.css']
})
export class CpuListComponent implements OnInit {

  cpus: Cpu[] = [];
  cpuLatestDetails: CpuDetails[] = [];
  barChartType = 'bar';
  barChartLegend = false;
  barChartLabels: String[] = [];
  barChartOptions = {
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

  chartData: number[] = [];
  barsColor: string[] = [];
  barChartData = [
    {data: this.chartData, label: 'Sales', backgroundColor: this.barsColor}
  ];
  intelColor: string = 'rgba(56, 151, 234, 0.7)';
  amdColor: string = 'rgba(234, 56, 56, 0.7)';

  constructor(private cpuService: CpuService,
              private cpuDetailsService: CpuDetailsService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadCpus();
    this.loadLatestStatistics();
  }

  loadCpus() {
    this.cpuService.getCpuList().subscribe(cpus => {
      // @ts-ignore
      this.cpus = cpus;
    }, error => console.log(error));
  }

  loadLatestStatistics() {
    this.cpuDetailsService.getLatestDate().subscribe(date => {
      this.cpuDetailsService.getCpuDetailsByDate(date).subscribe(cpuDetails => {
        this.cpuLatestDetails = cpuDetails;
        this.cpuLatestDetails.forEach(cpuDetails => {
          this.barChartLabels.push(cpuDetails.cpu.name);
          this.chartData.push(cpuDetails.sales);
          if(cpuDetails.cpu.companyName === "AMD") {
            this.barsColor.push(this.amdColor);
          } else if (cpuDetails.cpu.companyName === "Intel") {
            this.barsColor.push(this.intelColor);
          }
        })
      })
    });
  }

  showCpuDetails(id: number) {
    this.router.navigate(['cpus/details', id]);
  }
}
