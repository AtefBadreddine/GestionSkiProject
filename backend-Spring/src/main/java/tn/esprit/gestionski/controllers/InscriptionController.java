package tn.esprit.gestionski.controllers;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionski.entities.Inscription;
import tn.esprit.gestionski.entities.Skieur;
import tn.esprit.gestionski.entities.Support;
import tn.esprit.gestionski.entities.TypeAbonnement;
import tn.esprit.gestionski.repositories.InscriptionRepository;
import tn.esprit.gestionski.services.IInscription;
import tn.esprit.gestionski.services.InscriptionServiceImp;
import tn.esprit.gestionski.services.SkieurServiceImp;

import java.util.List;

@RestController
@RequestMapping("/inscription")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class InscriptionController {

    @Autowired
    private InscriptionServiceImp inscriptionServiceImp;

    @Autowired
    private InscriptionRepository inscriptionRepository;

    @GetMapping("/getall")
    public List<Inscription> findAllInscri() {
        return  inscriptionRepository.findAll();
    }

    @PostMapping("addInscriptionAndAssignToSkieur/{numSk}")
    private Inscription addInscriptionAndAssignToSkieur (@RequestBody Inscription i,@PathVariable Long numSk){
        return inscriptionServiceImp.addInscriptionAndAssignToSkieur(i,numSk);
    }

    @PostMapping("addInscription/addCours/{numCours}")
    private Inscription addInscriptionAndAssignToCour (@RequestBody Inscription i,@PathVariable Long numCours){
        return inscriptionServiceImp.addInscriptionAndAssignToCour(i,numCours);
    }
    @GetMapping("/inscription/getnumsemaine/{numMoniteur}/{support}")
    public List<Integer> findByAbonnementType(@PathVariable long numMoniteur,@PathVariable Support support) {
        return  inscriptionServiceImp.numSemaineCoursOfMoniteurBySupport(numMoniteur,support);
    }

    @PostMapping("addInscription/assignToCoursAndSkieur/{numCours}/{numSkieur}")
    private Inscription addInscriptionAndAssignToSkierAndCours (@RequestBody Inscription i,@PathVariable Long numCours,@PathVariable Long numSkieur) throws Exception {
        return inscriptionServiceImp.addInscriptionAndAssignToSkierAndCours(i,numCours,numSkieur);
    }
    @DeleteMapping("deleteInscription/{numInscription}")
    public void removeInscription(@PathVariable Long numInscription)
    {
         this.inscriptionRepository.deleteById(numInscription);
    }

}
