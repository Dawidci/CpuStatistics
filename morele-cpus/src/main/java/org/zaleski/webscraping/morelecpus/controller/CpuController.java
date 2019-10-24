package org.zaleski.webscraping.morelecpus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zaleski.webscraping.morelecpus.exception.ResourceNotFoundException;
import org.zaleski.webscraping.morelecpus.model.Cpu;
import org.zaleski.webscraping.morelecpus.service.CpuService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cpus")
public class CpuController {

    @Autowired private CpuService cpuService;

    @GetMapping("")
    public List<Cpu> getAllCpus() {
        return cpuService.getAllCpus();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cpu> getCpuById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return cpuService.getCpuById(id);
    }

    @GetMapping("/company/{name}")
    public List<Cpu> getCpusByCompanyName(@PathVariable(value = "name") String name) {
        return cpuService.getCpusByCompanyName(name);
    }

    @GetMapping("/cores/{coreCount}")
    public List<Cpu> getCpusByCoreCount(@PathVariable(value = "coreCount") int coreCount) {
        return cpuService.getCpusByCoreCount(coreCount);
    }
}
