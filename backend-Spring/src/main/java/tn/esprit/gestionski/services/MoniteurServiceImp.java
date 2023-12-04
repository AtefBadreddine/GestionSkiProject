package tn.esprit.gestionski.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.entities.Moniteur;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.repositories.MoniteurRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
@AllArgsConstructor
public class MoniteurServiceImp implements IMoniteur{

    @Autowired
    private CoursRepository cr;

    @Autowired
    private MoniteurRepository mr;
    @Override
    public Moniteur addMoniteurAndAssignToCours(Moniteur m, long numCours) {
        Cours cours = cr.findById(numCours).orElse(null);
        m.getCours().add(cours);
        return mr.save(m);
    }
	@Override
	public Moniteur save(Moniteur m) {
		return mr.save(m);
	}
	@Override
	public List<Moniteur> get_all() {
		// TODO Auto-generated method stub
		return mr.findAll();
	}
	@Override
	public void remove(long id) {
		mr.deleteById(id);
		
	}
	@Override
	public Moniteur get_one(long id) {
		return mr.getById(id);
	}
	@Override
	public Moniteur assign_cours(long id, long cours_id) {
		Moniteur m = mr.findById(id).orElse(null);
		Cours c = cr.findById(cours_id).orElse(null);
		m.getCours().add(c);
		c.setMoniteur(m);
		
		return mr.save(m);
	}
}
