package tn.esprit.gestionski.entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Getter
@Setter
//@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Moniteur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long numMoniteur;
    private String nomM;
    private String prenomM;
    @Temporal(TemporalType.DATE)
    private Date dateRecru;
    @OneToMany(mappedBy = "moniteur", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<Cours> cours;    
    
	public Moniteur() {
		this.numMoniteur = 0;
		this.nomM = "";
		this.prenomM = "";
		this.dateRecru = null;
		this.cours = new ArrayList<>();
	}

	public void setNumMoniteur(long numMoniteur) {
		this.numMoniteur = numMoniteur;
	}

	public void setNomM(String nomM) {
		this.nomM = nomM;
	}

	public void setPrenomM(String prenomM) {
		this.prenomM = prenomM;
	}

	public void setDateRecru(Date dateRecru) {
		this.dateRecru = dateRecru;
	}

	public void setCours(List<Cours> cours) {
		this.cours = cours;
	}
    
    
}
