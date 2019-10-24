package org.zaleski.webscraping.morelecpus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.zaleski.webscraping.morelecpus.model.Cpu;

import java.util.List;

@Repository
public interface CpuRepository extends JpaRepository<Cpu, Long> {
    List<Cpu> findByCompanyName(String companyName);
    List<Cpu> findByCoreCount(int coreCount);
}
