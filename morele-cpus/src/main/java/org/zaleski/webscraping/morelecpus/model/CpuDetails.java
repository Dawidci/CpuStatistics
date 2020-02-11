package org.zaleski.webscraping.morelecpus.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "cpu_details")
public class CpuDetails {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "price", nullable = false)
    private int price;
    @Column(name = "sales", nullable = false)
    private int sales;
    @Column(name = "update_date", nullable = false)
    private LocalDate date;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "id_cpu", nullable = false)
    private Cpu cpu;

    public CpuDetails() {
    }

    public CpuDetails(long id, int price, int sales, LocalDate date, Cpu cpu) {
        this.id = id;
        this.price = price;
        this.sales = sales;
        this.date = date;
        this.cpu = cpu;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getSales() {
        return sales;
    }

    public void setSales(int sales) {
        this.sales = sales;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Cpu getCpu() {
        return cpu;
    }

    public void setCpu(Cpu cpu) {
        this.cpu = cpu;
    }
}
