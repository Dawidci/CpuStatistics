package org.zaleski.webscraping.morelecpus.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@Entity @Table(name = "cpu_details")
public class CpuDetails {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "id_cpu", nullable = false)
    private long idCpu;
    @Column(name = "price", nullable = false)
    private int price;
    @Column(name = "sales", nullable = false)
    private int sales;
    @Column(name = "update_date", nullable = false)
    private LocalDate date;
}
