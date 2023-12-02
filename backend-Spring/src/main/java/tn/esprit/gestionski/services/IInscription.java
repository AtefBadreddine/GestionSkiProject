package tn.esprit.gestionski.services;

import tn.esprit.gestionski.entities.Inscription;
import tn.esprit.gestionski.entities.Support;

import java.util.List;

public interface IInscription {
    public Inscription addInscriptionAndAssignToSkieur(Inscription inscription, Long numSkieur);
    public Inscription addInscriptionAndAssignToCour(Inscription inscription, Long numCours);
    Inscription addInscriptionAndAssignToSkierAndCours(Inscription inscription, Long numSkieur, Long numCours) throws Exception;

    List<Integer> numSemaineCoursOfMoniteurBySupport(Long numMoniteur, Support support);

}
