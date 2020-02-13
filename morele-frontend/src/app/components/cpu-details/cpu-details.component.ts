import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CpuDetailsService } from "../../services/cpu-details.service";
import { CpuService } from "../../services/cpu.service";
import { Cpu } from "../../models/cpu";
import { CpuDetails } from "../../models/cpu-details";

@Component({
  selector: 'app-cpu-details',
  templateUrl: './cpu-details.component.html',
  styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

  id: number = this.route.snapshot.params['id'];
  cpuDetails: CpuDetails[] = [];
  cpu: Cpu;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cpuService: CpuService,
              private cpuDetailsService: CpuDetailsService) { }

  ngOnInit() {
    this.loadCpuDetails();
  }

  loadCpuDetails() {
    this.cpuDetailsService.getCpuDetailsByCpu(this.id).subscribe(cpuDetails => {
      this.cpuDetails = cpuDetails;
      this.cpu = this.cpuDetails[0].cpu;
    }, error => console.log(error));
  }

  goToCpuList() {
    this.router.navigate(['cpus']);
  }
}
