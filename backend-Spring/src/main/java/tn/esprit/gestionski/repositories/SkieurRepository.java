package tn.esprit.gestionski.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.gestionski.entities.Skieur;
import tn.esprit.gestionski.entities.TypeAbonnement;

import java.util.Date;
import java.util.List;

public interface SkieurRepository extends JpaRepository<Skieur,Long> {

    List<Skieur> findByAbonnement_TypeAbonnement(TypeAbonnement typeA);

    List<Skieur> findByAbonnement_DateFinBetween(Date start,Date end);



}
