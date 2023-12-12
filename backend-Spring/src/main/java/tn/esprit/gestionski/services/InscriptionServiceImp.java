package tn.esprit.gestionski.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.ErrorResponseException;
import tn.esprit.gestionski.entities.*;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.repositories.InscriptionRepository;
import tn.esprit.gestionski.repositories.SkieurRepository;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Period;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
@AllArgsConstructor
public class InscriptionServiceImp implements  IInscription{


     private InscriptionRepository  inscriptionRepository;
     private SkieurRepository  skieurRepository;
     private CoursRepository coursRepository;


    @Override
    public Inscription addInscriptionAndAssignToSkieur(Inscription inscription, Long numSkieur) {
        Skieur skieur = skieurRepository.findById(numSkieur).orElse(null);
        inscription.setSkieur(skieur);
        return inscriptionRepository.save(inscription);
    }
    public Inscription addInscriptionAndAssignToCour(Inscription inscription, Long numCours){
        Cours Cour = coursRepository.findById(numCours).orElse(null);
        inscription.setCours(Cour);
        return inscriptionRepository.save(inscription);
    }

    @Override
    public List<Integer> numSemaineCoursOfMoniteurBySupport(Long numMoniteur, Support support) {
        return inscriptionRepository.numWeeksCourseOfInstructorBySupport(numMoniteur,support);
    }

    @Override
    public Optional<Inscription> addInscriptionAndAssignToSkierAndCours(int inscription, Long numCours, Long numSkieur)  {
        Optional<Skieur> s = skieurRepository.findById(numSkieur);
        Optional<Cours> c =  coursRepository.findById(numCours);
        if ( c.isEmpty() || s.isEmpty()) {
            System.out.println("empty");
            return Optional.empty();
        }
       /* Date dateNaissance = s.get().getDateNaissance();
        int year = Integer.parseInt(new SimpleDateFormat("yyyy").format(dateNaissance));
        long age = LocalDate.now().getYear() - year;
        TypeCours tc = c.get().getTypeCours();
        if (tc == TypeCours.COLLECTIF_ADULTE || tc == TypeCours.COLLECTIF_ENFANT) {
            if (inscriptionRepository.countByCoursNumCours(numCours) < 6 ) {
                if (tc == TypeCours.COLLECTIF_ENFANT && age < 18)
                    inscription.setSkieur(s.get());
                else if ( tc == TypeCours.COLLECTIF_ADULTE && age > 17)
                    inscription.setSkieur(s.get());
            }

        }
        else {
            inscription.setSkieur(s.get());
        }*/
        Inscription inscription1 = new Inscription();
        inscription1.setNumSemaine(inscription);
        inscription1.setCours(c.get());
        inscription1.setSkieur(s.get());
        inscriptionRepository.save(inscription1);
        return Optional.of(inscription1);
    }


}
