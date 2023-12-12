package tn.esprit.gestionski.controllers;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionski.entities.*;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.repositories.InscriptionRepository;
import tn.esprit.gestionski.repositories.SkieurRepository;
import tn.esprit.gestionski.services.IInscription;
import tn.esprit.gestionski.services.InscriptionServiceImp;
import tn.esprit.gestionski.services.SkieurServiceImp;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/inscription")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class InscriptionController {

    @Autowired
    private InscriptionServiceImp inscriptionServiceImp;

    @Autowired
    private InscriptionRepository inscriptionRepository;

    @Autowired
    private CoursRepository cr;

    @Autowired
    private SkieurRepository sk;

    @GetMapping("/getall")
    public List<Inscription> findAllInscri() {
        return  inscriptionRepository.findAll();
    }

    @GetMapping("/findById/{numCours}")
    public Inscription findCoursById(@PathVariable long numCours) {
        return inscriptionRepository.findById(numCours).orElse(null);
    }

    @PostMapping("/update/{numcours}/{numskieur}")
    private Inscription update (@RequestBody Inscription i,@PathVariable long numcours,@PathVariable long numskieur){
       Inscription old = inscriptionRepository.findById(i.getNumInscription()).orElse(null);
       old.setNumSemaine(i.getNumSemaine());
       Cours c = cr.findById(numcours).orElse(null);
       Skieur s = sk.findById(numskieur).orElse(null);
       old.setCours(c);
       old.setSkieur(s);
       return inscriptionRepository.save(old);
    }


    @PostMapping("/addInscriptionAndAssignToSkieur/{numSk}")
    private Inscription addInscriptionAndAssignToSkieur (@RequestBody Inscription i,@PathVariable Long numSk){
        return inscriptionServiceImp.addInscriptionAndAssignToSkieur(i,numSk);
    }

    @PostMapping("/addInscription/addCours/{numCours}")
    private Inscription addInscriptionAndAssignToCour (@RequestBody Inscription i,@PathVariable Long numCours){
        return inscriptionServiceImp.addInscriptionAndAssignToCour(i,numCours);
    }
    @GetMapping("/inscription/getnumsemaine/{numMoniteur}/{support}")
    public List<Integer> findByAbonnementType(@PathVariable long numMoniteur,@PathVariable Support support) {
        return  inscriptionServiceImp.numSemaineCoursOfMoniteurBySupport(numMoniteur,support);
    }

    @PostMapping("addInscription/assignToCoursAndSkieur/{numCours}/{numSkieur}/{numSem}")
    private Optional<Inscription> addInscriptionAndAssignToSkierAndCours (@PathVariable int numSem, @PathVariable Long numCours, @PathVariable Long numSkieur)  {
        return inscriptionServiceImp.addInscriptionAndAssignToSkierAndCours(numSem,numCours,numSkieur);
    }


}
