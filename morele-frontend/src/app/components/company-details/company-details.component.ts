import { Component, OnInit } from '@angular/core';
import { CpuService } from "../../services/cpu.service";
import { CpuDetailsService } from "../../services/cpu-details.service";
import { CpuDetails } from "../../models/cpu-details";
import { GenerateChartsService } from "../../services/generate-charts.service";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  dates: string[] = [];
  cpuDetails: CpuDetails[] = [];
  salesChartLabels: string[] = [];

  constructor(private cpuService: CpuService,
              private generateChartsService: GenerateChartsService,
              private cpuDetailsService: CpuDetailsService) { }

  ngOnInit() {
    this.generateChartsService.initializeChart("line");
    this.loadData();
  }

  loadData() {
    this.cpuDetailsService.getAllDates().subscribe(dates => {
      this.salesChartLabels = dates.toString().split(",");
      this.salesChartLabels.forEach(date => this.loadCpuDetailsByDate(date));
    }, error => console.log(error));
  }

  loadCpuDetailsByDate(date: string) {
    this.cpuDetailsService.getCpuDetailsByDate(date).subscribe(details => {
      this.generateChartsService.loadCompaniesCpuDetails(details);
    }, error => console.log(error));
  }
}
