package tn.esprit.gestionski.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionski.entities.Abonnement;
import tn.esprit.gestionski.entities.TypeAbonnement;
import tn.esprit.gestionski.services.AbonnementServiceImp;

import java.util.Date;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/Abonnement")
public class AbonnementController {

    @Autowired
    AbonnementServiceImp abonnementServiceImp;

@PostMapping("/addAbonnement")
    public Abonnement addAbonnement(@RequestBody Abonnement a) {
        return abonnementServiceImp.addAbonnement(a);
    }

@PutMapping("/updateAbonnement")
    public Abonnement updateAbonnement(@RequestBody Abonnement a) {
        return abonnementServiceImp.updateAbonnement(a);
    }
    @GetMapping("/getAll")
    public List<Abonnement> findAllAbonnement() {
        return abonnementServiceImp.findAllAbonnement();
    }
@GetMapping("/get/{numAbon}")
    public Abonnement findById(@PathVariable long numAbon) {
        return abonnementServiceImp.findById(numAbon);
    }



@DeleteMapping("/delete/{numAbon}")
    public void deleteAbonnement(@PathVariable long numAbon) {
        abonnementServiceImp.deleteAbonnement(numAbon);
    }








    @GetMapping("/abonnementByType/{type}")
    Set<Abonnement> findByTypeAbonnemnt(@PathVariable TypeAbonnement type) {
       return abonnementServiceImp.getAbonnementByType(type);
    }
    @GetMapping("/abonnementBetween2Date/{date1}/{date2}")
    List<Abonnement> findBetween2Dates(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date1, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date2) {
        return abonnementServiceImp.findBy2DateDebut(date1,date2);
    }

/*service avance*/
    @GetMapping("/calculerRestants/{abonnementId}")
    public String calculerJoursRestants(@PathVariable Long abonnementId) {
        return abonnementServiceImp.calculateRemainingDaysAndMessageByAbonnementId(abonnementId);
    }
    @PostMapping("/prolonger/{abonnementId}")
    public String extendAbonnement(@PathVariable Long abonnementId, @RequestParam int additionalDays) {
        return abonnementServiceImp.extendAbonnement(abonnementId, additionalDays);
    }


    @GetMapping("/pourcentage-par-type")
    public List<Object[]> getPourcentageParTypeAbonnement() {
        return abonnementServiceImp.getPourcentageParTypeAbonnement();
    }
}
