package tn.esprit.gestionski.services;

import tn.esprit.gestionski.entities.Cours;

import java.util.List;

public interface ICours {
    Cours addCours(Cours cours);

    Cours updateCours(Cours cours);

    List<Cours> findAllCours();

    Cours findCoursById(long numCours);

    void deleteCours(long numCours);
}
