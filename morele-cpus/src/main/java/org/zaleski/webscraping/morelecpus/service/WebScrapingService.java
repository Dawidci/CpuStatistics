package org.zaleski.webscraping.morelecpus.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.*;
import org.jsoup.select.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.zaleski.webscraping.morelecpus.exception.ResourceNotFoundException;
import org.zaleski.webscraping.morelecpus.model.Cpu;
import org.zaleski.webscraping.morelecpus.model.CpuDetails;

import javax.validation.constraints.Null;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class WebScrapingService {

    @Autowired private CpuService cpuService;
    @Autowired private CpuDetailsService cpuDetailsService;

    public void webScraping() throws IOException {
        LocalDate maxDate = this.cpuDetailsService.getMaxDate();
        if(!maxDate.equals(LocalDate.now())) getAllCPUdata();
    }

    private void getAllCPUdata() throws IOException {

        String moreleUrl = "https://www.morele.net/komputery/podzespoly-komputerowe/procesory-45/,,,,,,,sd,1,,,,/1/";
        Document doc = Jsoup.connect(moreleUrl).get();
        Elements processors = doc.select("div.category-list div.cat-list-products div.cat-product-content");
        processors.forEach(processor -> {
            try {
                addNewCpuAndCpuDetails(processor);
            } catch (ResourceNotFoundException e) {
                e.printStackTrace();
            }
        });
    }

    private void addNewCpuAndCpuDetails(Element processor) throws ResourceNotFoundException, NullPointerException {

        Cpu newCpu = new Cpu();
        CpuDetails newCpuDetails = new CpuDetails();

        getMainCPUdata(newCpu, processor);
        getCPUsales(newCpuDetails, processor);
        getCPUpriceAndCoreCount(newCpu, newCpuDetails, processor);
        newCpuDetails.setDate(LocalDate.now());

        ResponseEntity<Cpu> findCpu = cpuService.getCpuByName(newCpu.getName());

        if(findCpu.getBody() == null) {
            cpuService.createCpu(newCpu);
            findCpu = cpuService.getCpuByName(newCpu.getName());
        }

        newCpuDetails.setCpu(findCpu.getBody());
        cpuDetailsService.createCpuDetails(newCpuDetails);
    }

    private void getMainCPUdata(Cpu newCPU, Element processor) {

        String fullProductName = processor.select("h2.cat-product-name").text();
        ArrayList<String> names = new ArrayList<>(Arrays.asList(fullProductName.split(", ")));
        Matcher matcher = getMatcherByRegex("^([\\w]*)", names.get(0).replace("Procesor ", ""));

        if(matcher.find()) {
            newCPU.setCompanyName(matcher.group());
            newCPU.setName(matcher.replaceFirst("").trim());
            newCPU.setClockSpeed(Float.parseFloat(names.get(1).replace("GHz", "")));
            newCPU.setCache(Integer.parseInt(names.get(2).replace(" ", "").replace("MB", "")));
        }
    }

    private void getCPUsales(CpuDetails newCpuDetails, Element processor) {

        String sales = processor.select("div.cat-product-stat div.cat-product-sold").text();
        Matcher matcher = getMatcherByRegex("[\\d]+", sales);
        if(matcher.find()) newCpuDetails.setSales(Integer.parseInt(matcher.group()));
    }

    private void getCPUpriceAndCoreCount(Cpu newCPU, CpuDetails newCpuDetails, Element processor) {

        Elements features = processor.select("div.cat-product-features div.cat-product-feature");
        String price = processor.select("div.cat-product-right div.cat-product-price div.price-new").text()
                .replace(" ", "");

        Matcher matcher = getMatcherByRegex("^[\\d]+", price);

        if(matcher.find()) {
            newCpuDetails.setPrice(Integer.parseInt(matcher.group()));
            newCPU.setCoreCount(Integer.parseInt(features.get(1).attr("title")));
        }
    }

    private Matcher getMatcherByRegex(String regex, String text) {

        Pattern pattern = Pattern.compile(regex);
        return pattern.matcher(text);
    }
}
