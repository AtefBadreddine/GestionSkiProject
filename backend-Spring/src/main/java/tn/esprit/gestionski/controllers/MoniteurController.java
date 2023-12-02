package tn.esprit.gestionski.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.gestionski.entities.Moniteur;
import tn.esprit.gestionski.services.IMoniteur;
import tn.esprit.gestionski.services.MoniteurServiceImp;

@RestController
@AllArgsConstructor
public class MoniteurController {


    @Autowired
    private IMoniteur iMoniteur;

    @PostMapping("/addMoniteurToCours/{numCours}")
    public Moniteur addMoniteurAndAssignToCours(@RequestBody Moniteur moniteur,@PathVariable Long numCours) {
        return  iMoniteur.addMoniteurAndAssignToCours(moniteur,numCours);
    }
}
