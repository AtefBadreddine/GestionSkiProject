package tn.esprit.gestionski.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Abonnement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long numAbon;
    @Temporal(TemporalType.DATE)
    private Date dateDebut;
    @Temporal(TemporalType.DATE)
    private Date dateFin;
    private float prixAbon;
    @Enumerated (EnumType.STRING)
    private TypeAbonnement typeAbonnement;
    
    public Abonnement() {
        // Default constructor
    }

    public Abonnement setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
        return this;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public float getPrixAbon() {
        return prixAbon;
    }

    public Abonnement setPrixAbon(float prixAbon) {
        this.prixAbon = prixAbon;
        return this;
    }

    public TypeAbonnement getTypeAbonnement() {
        return typeAbonnement;
    }

    public Abonnement setTypeAbonnement(TypeAbonnement typeAbonnement) {
        this.typeAbonnement = typeAbonnement;
        return this;
    }

    public long getNumAbon() {
        return numAbon;
    }

    public Abonnement setNumAbon(long numAbon) {
        this.numAbon = numAbon;
        return this;
    }

    public Abonnement setDateFin(Date dateFin) {
        this.dateFin = dateFin;
        return this;
    }

    public Date getDateDebut() {
        return dateDebut;
    }


    public Abonnement(long numAbon, Date dateDebut, Date dateFin, float prixAbon, TypeAbonnement typeAbonnement) {
        this.numAbon = numAbon;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.prixAbon = prixAbon;
        this.typeAbonnement = typeAbonnement;
    }
}
