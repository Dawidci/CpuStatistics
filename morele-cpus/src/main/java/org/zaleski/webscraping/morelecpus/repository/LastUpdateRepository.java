package org.zaleski.webscraping.morelecpus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.zaleski.webscraping.morelecpus.model.LastUpdate;

@Repository
public interface LastUpdateRepository extends JpaRepository<LastUpdate, Long> {
}
