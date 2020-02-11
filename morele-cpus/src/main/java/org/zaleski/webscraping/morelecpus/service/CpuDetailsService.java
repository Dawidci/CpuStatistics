package org.zaleski.webscraping.morelecpus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.zaleski.webscraping.morelecpus.exception.ResourceNotFoundException;
import org.zaleski.webscraping.morelecpus.model.CpuDetails;
import org.zaleski.webscraping.morelecpus.repository.CpuDetailsRepository;

import javax.validation.constraints.Null;
import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CpuDetailsService {

    @Autowired private CpuDetailsRepository cpuDetailsRepository;

    public List<CpuDetails> getAllCpuDetails() {

        return cpuDetailsRepository.findAll();
    }

    public ResponseEntity<CpuDetails> getCpuDetailsById(Long id) throws ResourceNotFoundException {

        CpuDetails cpuDetails = cpuDetailsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cpu details not found for id: " + id));
        return ResponseEntity.ok().body(cpuDetails);
    }

    public List<CpuDetails> getCpuDetailsByIdCpu(Long idCpu) {

        return cpuDetailsRepository.findByIdCpu(idCpu);
    }

    public List<CpuDetails> getCpuDetailsByDate(LocalDate date) {

        return cpuDetailsRepository.findByDate(date);
    }

    public LocalDate getMaxDate() {

        List<CpuDetails> details = this.getAllCpuDetails();
        return details.stream().map(CpuDetails::getDate).max(LocalDate::compareTo).get();
    }

    public CpuDetails createCpuDetails(CpuDetails cpuDetails) {

        cpuDetails.setDate(LocalDate.now().plusDays(1));
        return cpuDetailsRepository.save(cpuDetails);
    }
}
