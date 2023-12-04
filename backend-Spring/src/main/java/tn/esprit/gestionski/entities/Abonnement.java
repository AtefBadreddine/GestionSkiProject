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
	public long getNumAbon() {
		return numAbon;
	}
	public void setNumAbon(long numAbon) {
		this.numAbon = numAbon;
	}
	public Date getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}
	public Date getDateFin() {
		return dateFin;
	}
	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}
	public float getPrixAbon() {
		return prixAbon;
	}
	public void setPrixAbon(float prixAbon) {
		this.prixAbon = prixAbon;
	}
	public TypeAbonnement getTypeAbonnement() {
		return typeAbonnement;
	}
	public void setTypeAbonnement(TypeAbonnement typeAbonnement) {
		this.typeAbonnement = typeAbonnement;
	}

    


}
