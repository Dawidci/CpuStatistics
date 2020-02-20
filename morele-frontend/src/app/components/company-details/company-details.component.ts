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
              public generateChartsService: GenerateChartsService,
              private cpuDetailsService: CpuDetailsService) { }

  ngOnInit() {
    this.generateChartsService.initializeChart("line");
    this.loadAllDates();
  }

  loadAllDates() {
    this.cpuDetailsService.getAllDates().subscribe(dates => {
      for(let index = 0; index < dates.length; index++) {
        let date = dates[index];
        this.salesChartLabels.push(date);
        this.loadCpuDetailsByDate(date, index);
      }
    }, error => console.log(error));
  }

  loadCpuDetailsByDate(date: string, index: number) {
    this.cpuDetailsService.getCpuDetailsByDate(date).subscribe(details => {
      details.forEach(detail => console.log(detail.date));
      this.generateChartsService.loadCompaniesCpuDetails(details, index);
    }, error => console.log(error));
  }
}
