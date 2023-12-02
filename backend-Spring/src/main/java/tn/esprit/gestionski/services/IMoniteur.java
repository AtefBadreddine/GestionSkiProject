package tn.esprit.gestionski.services;

import tn.esprit.gestionski.entities.Moniteur;

public interface IMoniteur {
    Moniteur addMoniteurAndAssignToCours(Moniteur m,long numCours);
}
