package tn.esprit.gestionski.services;

import java.util.List;

import tn.esprit.gestionski.entities.Moniteur;

public interface IMoniteur {
	public Moniteur save(Moniteur m);
	public List<Moniteur> get_all();
	public void remove(long id);
	public Moniteur get_one(long id);
	public Moniteur assign_cours(long id, long cours_id);
	public List<Moniteur> date_sorted(int order);
    Moniteur addMoniteurAndAssignToCours(Moniteur m,long numCours);
}
