package tn.esprit.gestionski.services;

import tn.esprit.gestionski.entities.Inscription;
import tn.esprit.gestionski.entities.Skieur;
import tn.esprit.gestionski.entities.TypeAbonnement;

import java.util.List;

public interface ISkieur {
    Skieur add(Skieur S);

    public Skieur update(Skieur S);

    public List<Skieur> findAll();

    public Skieur findById(long idS);

    public void delete(long idS);
    public Skieur AssignSkieurtoPiste(Long numSkieur,Long numPiste);
    Skieur addSkieurAndAssignToCours(Skieur s,long numCours);

    List<Skieur> retreiveSkieurByTypeAbonnement(TypeAbonnement typeA);

    void testSchedule();

    void retrieveSubscriptions();


    long getInscriptionsCount(long s);

}
