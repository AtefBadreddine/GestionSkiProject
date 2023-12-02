package tn.esprit.gestionski.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Moniteur implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long numMoniteur;
    private String nomM;
    private String prenomM;
    @Temporal(TemporalType.DATE)
    private Date dateRecru;
    @OneToMany
    private List<Cours> cours;
}
