package tn.esprit.gestionski.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class Cours {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long numCours;
	private int niveau;

	@Enumerated(EnumType.STRING)
	private TypeCours typeCours;

	@Enumerated(EnumType.STRING)
	private Support support;
	private float prix;
	private int creneau;
	@ManyToOne
	private Moniteur moniteur;
	@OneToMany(mappedBy = "cours")
	@JsonBackReference
	private Set<Inscription> inscripion;
}