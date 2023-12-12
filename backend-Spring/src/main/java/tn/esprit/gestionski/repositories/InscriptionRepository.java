package tn.esprit.gestionski.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.gestionski.entities.Inscription;
import tn.esprit.gestionski.entities.Support;

import java.util.List;
import java.util.Set;

public interface InscriptionRepository extends JpaRepository<Inscription,Long> {

    @Query("select i.numSemaine from Inscription i join Moniteur m on i.cours member m.cours " +
            "where m.numMoniteur = :numInstructor and i.cours.support = :support")
    List<Integer> numWeeksCourseOfInstructorBySupport(@Param("numInstructor") Long numMoniteur,@Param("support") Support e_support);


    long countByCoursNumCours(long numCours);

    long countBySkieurNumSkieur(long numSkieur);
}
