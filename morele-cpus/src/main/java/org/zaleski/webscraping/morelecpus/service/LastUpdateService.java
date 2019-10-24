package org.zaleski.webscraping.morelecpus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.zaleski.webscraping.morelecpus.exception.ResourceNotFoundException;
import org.zaleski.webscraping.morelecpus.model.LastUpdate;
import org.zaleski.webscraping.morelecpus.repository.LastUpdateRepository;

import java.time.LocalDate;

@Service
public class LastUpdateService {

    @Autowired private LastUpdateRepository lastUpdateRepository;

    public ResponseEntity<LastUpdate> getLastUpdate() throws ResourceNotFoundException {
        LastUpdate lastUpdate = lastUpdateRepository.findById((long) 1)
                .orElseThrow(() -> new ResourceNotFoundException("Last Update not found"));
        return ResponseEntity.ok().body(lastUpdate);
    }

    public LastUpdate createLastUpdate() {
        return lastUpdateRepository.save(new LastUpdate(1, LocalDate.now()));
    }

    public ResponseEntity<LastUpdate> updateLastUpdate() throws ResourceNotFoundException {
        LastUpdate lastUpdate = lastUpdateRepository.findById((long) 1)
                .orElseThrow(() -> new ResourceNotFoundException("Last update not found"));

        lastUpdate.setLastUpdate(LocalDate.now());
        final LastUpdate updatedLastUpdate = lastUpdateRepository.save(lastUpdate);
        return ResponseEntity.ok(updatedLastUpdate);
    }


}
