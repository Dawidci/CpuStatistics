package org.zaleski.webscraping.morelecpus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.zaleski.webscraping.morelecpus.exception.ResourceNotFoundException;
import org.zaleski.webscraping.morelecpus.model.Cpu;
import org.zaleski.webscraping.morelecpus.repository.CpuRepository;

import java.util.List;

@Service
public class CpuService {

    @Autowired private CpuRepository cpuRepository;

    public List<Cpu> getAllCpus() {
        return cpuRepository.findAll();
    }

    public ResponseEntity<Cpu> getCpuById(Long id) throws ResourceNotFoundException {
        Cpu cpu = cpuRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cpu not found for this id: " + id));
        return ResponseEntity.ok().body(cpu);
    }

    public ResponseEntity<Cpu> getCpuByName(String name) throws ResourceNotFoundException {
        Cpu cpu = cpuRepository.findByName(name);
        return ResponseEntity.ok().body(cpu);
    }

    public List<Cpu> getCpusByCompanyName(String name) {
        return cpuRepository.findByCompanyName(name);
    }

    public List<Cpu> getCpusByCoreCount(int coreCount) {
        return cpuRepository.findByCoreCount(coreCount);
    }

    public Cpu createCpu(Cpu cpu) {
        return cpuRepository.save(cpu);
    }
}
