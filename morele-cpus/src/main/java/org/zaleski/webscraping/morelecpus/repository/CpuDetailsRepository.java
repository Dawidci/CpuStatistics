package org.zaleski.webscraping.morelecpus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.zaleski.webscraping.morelecpus.model.Cpu;
import org.zaleski.webscraping.morelecpus.model.CpuDetails;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface CpuDetailsRepository extends JpaRepository<CpuDetails, Long> {
    List<CpuDetails> findByCpu(Optional<Cpu> idCpu);
    List<CpuDetails> findByDate(LocalDate date);
}
