package org.zaleski.webscraping.morelecpus.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "cpu_details")
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

    public CpuDetails() {
    }

    public CpuDetails(long id, long idCpu, int price, int sales, LocalDate date) {
        this.id = id;
        this.idCpu = idCpu;
        this.price = price;
        this.sales = sales;
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdCpu() {
        return idCpu;
    }

    public void setIdCpu(long idCpu) {
        this.idCpu = idCpu;
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
}
