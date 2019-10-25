package org.zaleski.webscraping.morelecpus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zaleski.webscraping.morelecpus.exception.ResourceNotFoundException;
import org.zaleski.webscraping.morelecpus.service.WebScrapingService;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/web-scraping")
public class WebScrapingController {

    @Autowired private WebScrapingService webScrapingService;

    @GetMapping("")
    public String webScraping() throws ResourceNotFoundException, IOException {
        return this.webScrapingService.webScraping();
    }
}
