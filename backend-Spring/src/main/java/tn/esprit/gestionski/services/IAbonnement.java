package tn.esprit.gestionski.services;

import org.springframework.data.repository.query.Param;
import tn.esprit.gestionski.entities.Abonnement;
import tn.esprit.gestionski.entities.Support;
import tn.esprit.gestionski.entities.TypeAbonnement;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

public interface IAbonnement {
    Set<Abonnement> getAbonnementByType(TypeAbonnement type);

    List<Abonnement> findBy2DateDebut(Date date1,Date date2);

    public void showMonthlyRecurringRevenue();
}
