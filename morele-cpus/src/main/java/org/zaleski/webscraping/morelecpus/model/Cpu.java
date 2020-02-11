package org.zaleski.webscraping.morelecpus.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "cpus")
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

    @OneToMany(mappedBy = "cpu", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<CpuDetails> cpuDetails;

    public Cpu() {
    }

    public Cpu(long id, String name, String companyName, int coreCount, int cache, float clockSpeed) {
        this.id = id;
        this.name = name;
        this.companyName = companyName;
        this.coreCount = coreCount;
        this.cache = cache;
        this.clockSpeed = clockSpeed;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public int getCoreCount() {
        return coreCount;
    }

    public void setCoreCount(int coreCount) {
        this.coreCount = coreCount;
    }

    public int getCache() {
        return cache;
    }

    public void setCache(int cache) {
        this.cache = cache;
    }

    public float getClockSpeed() {
        return clockSpeed;
    }

    public void setClockSpeed(float clockSpeed) {
        this.clockSpeed = clockSpeed;
    }
}
