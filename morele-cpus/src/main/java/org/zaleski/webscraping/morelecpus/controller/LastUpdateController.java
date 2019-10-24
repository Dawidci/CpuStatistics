package org.zaleski.webscraping.morelecpus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zaleski.webscraping.morelecpus.exception.ResourceNotFoundException;
import org.zaleski.webscraping.morelecpus.model.LastUpdate;
import org.zaleski.webscraping.morelecpus.service.LastUpdateService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/last-update")
public class LastUpdateController {

    @Autowired private LastUpdateService lastUpdateService;

    @GetMapping("")
    public ResponseEntity<LastUpdate> getLastUpdate() throws ResourceNotFoundException {
        return lastUpdateService.getLastUpdate();
    }
}
