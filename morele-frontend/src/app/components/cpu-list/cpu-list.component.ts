import { Component, OnInit } from '@angular/core';
import { Cpu } from "../../models/cpu";
import { CpuService } from "../../services/cpu.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.css']
})
export class CpuListComponent implements OnInit {

  cpus: Object = [];

  constructor(private cpuService: CpuService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadCpus();
  }

  loadCpus() {
    this.cpuService.getCpuList().subscribe(cpus => {
      this.cpus = cpus;
    }, error => console.log(error));
  }

  showCpuDetails(id: number) {
    this.router.navigate(['cpus/details', id]);
  }
}
