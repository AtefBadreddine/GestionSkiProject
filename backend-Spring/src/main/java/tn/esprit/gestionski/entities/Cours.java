package tn.esprit.gestionski.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Cours implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long numCours;
    private int niveau;
    private TypeCours typeCours;
    private Support support;
    private float prix;
    private int creneau;
    @ManyToOne
    private Moniteur moniteur;
    @OneToMany(mappedBy = "cours")
    private Set<Inscription> inscripion;
}
