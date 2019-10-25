package org.zaleski.webscraping.morelecpus.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity @Table(name = "cpus")
public class Cpu {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "companyName", nullable = false)
    private String companyName;
    @Column(name = "coreCount", nullable = false)
    private int coreCount;
    @Column(name = "cache", nullable = false)
    private int cache;
    @Column(name = "clockSpeed", nullable = false)
    private float clockSpeed;
}
