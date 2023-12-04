package tn.esprit.gestionski.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Skieur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long numSkieur;
    private String nomS;
    private String prenomS;
    private String email;
    @Temporal(TemporalType.DATE)
    private Date dateNaissance;
    private String ville;
    @OneToOne
    private Abonnement abonnement;
    @ManyToMany
    private Set<Piste> pistes;

    @OneToMany(mappedBy = "skieur",cascade = CascadeType.ALL)//one to many mapped by fili 3Ndou cardinalié a9al
    private Set<Inscription> inscripions;

	public long getNumSkieur() {
		return numSkieur;
	}

	public void setNumSkieur(long numSkieur) {
		this.numSkieur = numSkieur;
	}

	public String getNomS() {
		return nomS;
	}

	public void setNomS(String nomS) {
		this.nomS = nomS;
	}

	public String getPrenomS() {
		return prenomS;
	}

	public void setPrenomS(String prenomS) {
		this.prenomS = prenomS;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public Abonnement getAbonnement() {
		return abonnement;
	}

	public void setAbonnement(Abonnement abonnement) {
		this.abonnement = abonnement;
	}

	public Set<Piste> getPistes() {
		return pistes;
	}

	public void setPistes(Set<Piste> pistes) {
		this.pistes = pistes;
	}

	public Set<Inscription> getInscripions() {
		return inscripions;
	}

	public void setInscripions(Set<Inscription> inscripions) {
		this.inscripions = inscripions;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

    
}
