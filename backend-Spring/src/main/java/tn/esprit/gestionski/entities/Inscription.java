package tn.esprit.gestionski.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Inscription implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long numInscription;
    private int numSeamiane;
    private int numSemaine;
    @ManyToOne
    @JsonIgnore
    private Skieur skieur;
    @ManyToOne
    private Cours cours;
	public long getNumInscription() {
		return numInscription;
	}
	public void setNumInscription(long numInscription) {
		this.numInscription = numInscription;
	}
	public int getNumSeamiane() {
		return numSeamiane;
	}
	public void setNumSeamiane(int numSeamiane) {
		this.numSeamiane = numSeamiane;
	}
	public int getNumSemaine() {
		return numSemaine;
	}
	public void setNumSemaine(int numSemaine) {
		this.numSemaine = numSemaine;
	}
	public Skieur getSkieur() {
		return skieur;
	}
	public void setSkieur(Skieur skieur) {
		this.skieur = skieur;
	}
	public Cours getCours() {
		return cours;
	}
	public void setCours(Cours cours) {
		this.cours = cours;
	}

    
}
