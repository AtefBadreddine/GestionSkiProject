package tn.esprit.gestionski.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.entities.Inscription;

public interface CoursRepository extends JpaRepository<Cours,Long> {
}
