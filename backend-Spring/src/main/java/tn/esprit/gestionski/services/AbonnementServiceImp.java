package tn.esprit.gestionski.services;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.gestionski.entities.Abonnement;
import tn.esprit.gestionski.entities.Support;
import tn.esprit.gestionski.entities.TypeAbonnement;
import tn.esprit.gestionski.repositories.AbonnementRepository;

import java.time.LocalDate;
import java.time.Period;
import java.util.Date;
import java.util.List;
import java.util.Set;


@Slf4j
@Service
public class AbonnementServiceImp implements IAbonnement{

    @Autowired
    AbonnementRepository abonnementRepository;

    @Override
    public Abonnement addAbonnement(Abonnement a) {
        return abonnementRepository.save(a);
    }

    @Override
    public Abonnement updateAbonnement(Abonnement a) {
        return abonnementRepository.save(a);
    }

    @Override
    public List<Abonnement> findAllAbonnement() {
        return abonnementRepository.findAll();
    }

    @Override
    public Abonnement findById(long numAbon) {
        return abonnementRepository.findById(numAbon).orElse(null);
    }

    @Override
    public void deleteAbonnement(long numAbon) {
        abonnementRepository.deleteById(numAbon);

    }

    @Override
    public Set<Abonnement> getAbonnementByType(TypeAbonnement type) {
        return  abonnementRepository.getSubscribtionByType(type);
    }

    @Override
    public List<Abonnement> findBy2DateDebut(Date date1, Date date2) {
        return abonnementRepository.findByDateDebutBetween(date1,date2);
    }

    @Override
  //  @Scheduled(cron = "*/10 * * * * *")
    public void showMonthlyRecurringRevenue() {
        Long mrr =  abonnementRepository.sommeAbonMensuel(TypeAbonnement.MENSUEL);
        log.info("your mrr : "+mrr);
    }

    @Override
    @Transactional(readOnly = true)
    public String calculateRemainingDaysAndMessageByAbonnementId(Long abonnementId) {
        if (!abonnementRepository.existsById(abonnementId)) {
            return "Abonnement non trouvé.";
        }
        long remainingDays = abonnementRepository.calculateRemainingDaysByAbonnementIdJPQL(abonnementId);


        if (remainingDays >= 0) {
            return "Il reste " + remainingDays + " jours dans l'abonnement.";
        } else {
            return "L'abonnement est terminé.";
        }

    }



}
