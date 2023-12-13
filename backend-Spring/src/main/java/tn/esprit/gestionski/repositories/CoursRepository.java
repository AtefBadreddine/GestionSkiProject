package tn.esprit.gestionski.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.entities.Inscription;

import java.util.Set;
import java.util.List;

public interface CoursRepository extends JpaRepository<Cours,Long> {

    @Query("select i from Inscription i where i.cours.numCours = :num_param")
    public Set<Inscription> getRelatedCours(@Param("num_param") long id);

    @Query("select c from Cours c where c.moniteur.numMoniteur = :id_moniteur")
    public List<Cours> getCoursWithMoniteur(@Param("id_moniteur") long id);

}
