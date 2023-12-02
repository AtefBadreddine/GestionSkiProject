package tn.esprit.gestionski.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.entities.Moniteur;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.repositories.MoniteurRepository;

import java.util.HashSet;
import java.util.Set;


@Service
@AllArgsConstructor
public class MoniteurServiceImp implements IMoniteur{

    @Autowired
    private CoursRepository coursRepository;

    @Autowired
    private MoniteurRepository moniteurRepository;
    @Override
    public Moniteur addMoniteurAndAssignToCours(Moniteur m, long numCours) {
        Cours cours = coursRepository.findById(numCours).orElse(null);
        m.getCours().add(cours);
        return moniteurRepository.save(m);
    }
}
