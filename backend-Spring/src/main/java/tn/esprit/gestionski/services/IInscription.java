package tn.esprit.gestionski.services;

import tn.esprit.gestionski.entities.Inscription;
import tn.esprit.gestionski.entities.Support;

import java.util.List;
import java.util.Optional;

public interface IInscription {
    public Inscription addInscriptionAndAssignToSkieur(Inscription inscription, Long numSkieur);
    public Inscription addInscriptionAndAssignToCour(Inscription inscription, Long numCours);
    Optional<Inscription> addInscriptionAndAssignToSkierAndCours(int inscription, Long numSkieur, Long numCours) throws Exception;

    List<Integer> numSemaineCoursOfMoniteurBySupport(Long numMoniteur, Support support);

}
