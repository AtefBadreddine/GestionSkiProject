package tn.esprit.gestionski.services;


import jakarta.servlet.http.HttpServletResponse;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.entities.Inscription;
import tn.esprit.gestionski.entities.Support;

import java.io.IOException;
import java.util.List;

public interface IInscription {
    public Inscription addInscriptionAndAssignToSkieur(Inscription inscription, Long numSkieur);
    public Inscription addInscriptionAndAssignToCour(Inscription inscription, Long numCours);
    Inscription addInscriptionAndAssignToSkierAndCours(Inscription inscription, Long numSkieur, Long numCours) throws Exception;

    List<Integer> numSemaineCoursOfMoniteurBySupport(Long numMoniteur, Support support);
    Inscription findById(Long Id);
    Inscription updateInscription (Inscription inscription,Long numSkieur,Long numCours);

    long countByCoursAndNumSemaineGreaterThan(Cours cours,int numSemaine);

}
