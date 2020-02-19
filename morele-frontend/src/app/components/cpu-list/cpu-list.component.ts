import { Component, OnInit } from '@angular/core';
import { CpuService } from "../../services/cpu.service";
import { Router, ActivatedRoute } from '@angular/router';
import { CpuDetailsService } from "../../services/cpu-details.service";
import { GenerateChartsService } from "../../services/generate-charts.service";

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.css']
})
export class CpuListComponent implements OnInit {

  cpus: Object = [];

  constructor(private cpuService: CpuService,
              private cpuDetailsService: CpuDetailsService,
              private generateChartsService: GenerateChartsService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadCpus();
    this.generateChartsService.initializeChart("bar");
    this.loadLatestStatistics();
  }

  loadCpus() {
    this.cpuService.getCpuList().subscribe(cpus => {
      this.cpus = cpus;
    }, error => console.log(error));
  }

  loadLatestStatistics() {
    this.cpuDetailsService.getLatestDate().subscribe(date => {
      this.cpuDetailsService.getCpuDetailsByDate(date).subscribe(cpuDetails => {
        this.generateChartsService.loadChartData(cpuDetails);
      }, error => console.log(error));
    }, error => console.log(error));
  }

  showCpuDetails(id: number) {
    this.router.navigate(['cpus/details', id]);
  }
}
