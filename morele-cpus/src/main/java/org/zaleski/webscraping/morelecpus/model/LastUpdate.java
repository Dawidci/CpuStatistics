package org.zaleski.webscraping.morelecpus.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@Entity @Table(name = "last_update")
public class LastUpdate {
    @Id @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "update_date")
    private LocalDate lastUpdate;
}
