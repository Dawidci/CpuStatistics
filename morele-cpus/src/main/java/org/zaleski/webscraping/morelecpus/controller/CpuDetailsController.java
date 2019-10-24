package org.zaleski.webscraping.morelecpus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zaleski.webscraping.morelecpus.exception.ResourceNotFoundException;
import org.zaleski.webscraping.morelecpus.model.CpuDetails;
import org.zaleski.webscraping.morelecpus.service.CpuDetailsService;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cpu-details")
public class CpuDetailsController {

    @Autowired private CpuDetailsService cpuDetailsService;

    @GetMapping("")
    public List<CpuDetails> getAllCpuDetails() {
        return cpuDetailsService.getAllCpuDetails();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CpuDetails> getCpuDetailsById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return cpuDetailsService.getCpuDetailsById(id);
    }

    @GetMapping("/cpu/{idCpu}")
    public List<CpuDetails> getCpuDetailsByIdCpu(@PathVariable(value = "idCpu") Long idCpu) {
        return cpuDetailsService.getCpuDetailsByIdCpu(idCpu);
    }

    @GetMapping("/date/{date}")
    public List<CpuDetails> getCpuDetailsByDate(@PathVariable(value = "date") LocalDate date) {
        return cpuDetailsService.getCpuDetailsByDate(date);
    }
}
