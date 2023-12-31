package tn.esprit.gestionski.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.gestionski.entities.Abonnement;
import tn.esprit.gestionski.entities.TypeAbonnement;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

public interface AbonnementRepository extends JpaRepository<Abonnement,Long> {

    @Query("select a from Abonnement a where a.typeAbonnement = :type order by a.dateDebut")
    Set<Abonnement> getSubscribtionByType(@Param("type") TypeAbonnement typeAbonnement);

    List<Abonnement> findByDateDebutBetween (Date startDate, Date endDate);

    @Query("SELECT SUM(a.prixAbon) FROM Skieur s JOIN s.abonnement a WHERE a.typeAbonnement = :type")
    Long sommeAbonMensuel(@Param("type") TypeAbonnement typeAbonnement);


    @Query("SELECT DATEDIFF(a.dateFin, CURRENT_DATE) FROM Abonnement a WHERE a.numAbon = :abonnementId")
    long calculateRemainingDaysByAbonnementIdJPQL(@Param("abonnementId") Long abonnementId);

    @Modifying
    @Query("UPDATE Abonnement a SET a.dateFin = :newDateFin WHERE a.numAbon = :abonnementId")
    int extendAbonnement(@Param("abonnementId") Long abonnementId, @Param("newDateFin") LocalDate newDateFin);

    /******/
    @Query("SELECT a.typeAbonnement, COUNT(a) FROM Abonnement a GROUP BY a.typeAbonnement")
    List<Object[]> countAbonnementsParType();
}
