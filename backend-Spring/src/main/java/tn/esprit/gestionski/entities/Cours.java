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
    @Column(name = "num_cours")
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
	public long getNumCours() {
		return numCours;
	}
	public void setNumCours(long numCours) {
		this.numCours = numCours;
	}
	public int getNiveau() {
		return niveau;
	}
	public void setNiveau(int niveau) {
		this.niveau = niveau;
	}
	public TypeCours getTypeCours() {
		return typeCours;
	}
	public void setTypeCours(TypeCours typeCours) {
		this.typeCours = typeCours;
	}
	public Support getSupport() {
		return support;
	}
	public void setSupport(Support support) {
		this.support = support;
	}
	public float getPrix() {
		return prix;
	}
	public void setPrix(float prix) {
		this.prix = prix;
	}
	public int getCreneau() {
		return creneau;
	}
	public void setCreneau(int creneau) {
		this.creneau = creneau;
	}
	public Moniteur getMoniteur() {
		return moniteur;
	}
	public void setMoniteur(Moniteur moniteur) {
		this.moniteur = moniteur;
	}
	public Set<Inscription> getInscripion() {
		return inscripion;
	}
	public void setInscripion(Set<Inscription> inscripion) {
		this.inscripion = inscripion;
	}
    
    
}
