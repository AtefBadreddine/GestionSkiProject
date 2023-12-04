package tn.esprit.gestionski.services;

import ch.qos.logback.core.util.FixedDelay;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.config.FixedRateTask;
import org.springframework.stereotype.Service;
import tn.esprit.gestionski.entities.*;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.repositories.InscriptionRepository;
import tn.esprit.gestionski.repositories.PisteRepository;
import tn.esprit.gestionski.repositories.SkieurRepository;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Slf4j
@Service
public class SkieurServiceImp implements ISkieur {
    @Autowired
    private SkieurRepository sk;

    @Autowired
    private PisteRepository ps;
    private InscriptionRepository inscriptionRepository;


    @Autowired
    private CoursRepository coursRepository;

    @Override
    public Skieur add(Skieur S) {
        return sk.save(S);
    }

    @Override
    public Skieur update(Skieur S) {
        return sk.save(S);
    }

    @Override
    public List<Skieur> findAll() {
        return sk.findAll();
    }

    @Override
    public Skieur findById(long idS) {
        return sk.findById(idS).orElse(null);
    }

    @Override
    public void delete(long idS) {
        sk.deleteById(idS);
    }

    @Override
    public Skieur AssignSkieurtoPiste(Long numSkieur, Long numPiste) {
            Skieur skieur = sk.findById(numSkieur).orElse(null);
            Piste piste =ps.findById(numPiste).orElse(null);
            skieur.getPistes().add(piste);
            return sk.save(skieur);
    }

    @Override
    public Skieur addSkieurAndAssignToCours(Skieur s, long numCours) {
        Skieur newSkieur = sk.save(s);

        Cours c = coursRepository.findById(numCours).orElse(null);

        Set<Inscription> inscriptionList =  newSkieur.getInscripions();

        for (Inscription i:inscriptionList) {
            i.setSkieur(newSkieur);
            i.setCours(c);
            inscriptionRepository.save(i);
        }
        return sk.save(newSkieur);

    }

    @Override
    public List<Skieur> retreiveSkieurByTypeAbonnement(TypeAbonnement typeA) {
        return sk.findByAbonnement_TypeAbonnement(typeA);
    }

    @Override
   // @Scheduled(cron = "*/30 * * * * *")
    public void testSchedule() {
        //log.info("test");
    }

    @Override
 //   @Scheduled(cron = "0 0 10 * * *")
    public void retrieveSubscriptions() {
        Calendar calendar = Calendar.getInstance();
        Date currentDate = new Date();
        calendar.setTime(currentDate);
        calendar.add(Calendar.DAY_OF_MONTH, 7);
        Date endDate = calendar.getTime();
        List<Skieur> t =   sk.findByAbonnement_DateFinBetween(currentDate,endDate);
        for (Skieur skieur : t) {
            //log.info("Nom Abonnement: " + skieur.getAbonnement().getNumAbon());
            //log.info("Num Skieur: " + skieur.getNumSkieur());
            //log.info("Nom Skieur: " + skieur.getNomS());
            System.out.println("---------------");
        }
    }


}


