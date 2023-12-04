package tn.esprit.gestionski.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Piste implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long numPiste;
    private  String nomPiste;
    private Couleur couleur;
    private int logeur;
    private int pente;
    @ManyToMany(mappedBy = "pistes")
    private Set<Skieur> skieurs;
	public long getNumPiste() {
		return numPiste;
	}
	public void setNumPiste(long numPiste) {
		this.numPiste = numPiste;
	}
	public String getNomPiste() {
		return nomPiste;
	}
	public void setNomPiste(String nomPiste) {
		this.nomPiste = nomPiste;
	}
	public Couleur getCouleur() {
		return couleur;
	}
	public void setCouleur(Couleur couleur) {
		this.couleur = couleur;
	}
	public int getLogeur() {
		return logeur;
	}
	public void setLogeur(int logeur) {
		this.logeur = logeur;
	}
	public int getPente() {
		return pente;
	}
	public void setPente(int pente) {
		this.pente = pente;
	}
	public Set<Skieur> getSkieurs() {
		return skieurs;
	}
	public void setSkieurs(Set<Skieur> skieurs) {
		this.skieurs = skieurs;
	}

    
}
