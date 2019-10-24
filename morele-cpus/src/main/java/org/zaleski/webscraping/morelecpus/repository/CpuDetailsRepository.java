package org.zaleski.webscraping.morelecpus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.zaleski.webscraping.morelecpus.model.CpuDetails;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CpuDetailsRepository extends JpaRepository<CpuDetails, Long> {
    List<CpuDetails> findByIdCpu(long idCpu);
    List<CpuDetails> findByDate(LocalDate date);
}
