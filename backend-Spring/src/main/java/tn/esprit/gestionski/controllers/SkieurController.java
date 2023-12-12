package tn.esprit.gestionski.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionski.entities.Inscription;
import tn.esprit.gestionski.entities.Skieur;
import tn.esprit.gestionski.entities.TypeAbonnement;
import tn.esprit.gestionski.services.IInscription;
import tn.esprit.gestionski.services.ISkieur;
import tn.esprit.gestionski.services.SkieurServiceImp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/skieur")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class SkieurController  {

    @Autowired
    private SkieurServiceImp sk;

    ISkieur iSkieur;

    @PostMapping("/add")
    public Skieur addSkieur(@RequestBody Skieur f) {
        return  sk.add(f);
    }
    @PutMapping("/update")
    public Skieur updateSkieur(@RequestBody Skieur f) {
        return  sk.update(f);
    }

    @GetMapping("/getall")
    public List<Skieur> findAllSkieur() {
        return  sk.findAll();
    }
    @GetMapping("/get/{idF}")
    public Skieur findById(@PathVariable long idF) {
        return  sk.findById(idF);
    }
    @DeleteMapping("/delete/{idF}")
    public ResponseEntity<String> deleteSkieur(@PathVariable long idF) {
        sk.delete(idF);
        return ResponseEntity.status(HttpStatus.OK).build();
    }


    @PostMapping("AssignSkieurtoPiste/{numSkieur}/{numPiste}")
    public Skieur AssignSkieurtoPiste ( @PathVariable  Long numSkieur,@PathVariable Long numPiste){
        return sk.AssignSkieurtoPiste(numSkieur,numPiste);
    }


    @PostMapping("addSkieurtoCours/{numCours}")
    public Skieur addSkieurAndAssignToCours(@RequestBody Skieur s,@PathVariable long numCours) {
        return iSkieur.addSkieurAndAssignToCours(s,numCours);
    }

    @GetMapping("/getByTypeAbonnement/{typeA}")
    public List<Skieur> findByAbonnementType(@PathVariable TypeAbonnement typeA) {
        return  iSkieur.retreiveSkieurByTypeAbonnement(typeA);
    }

    @GetMapping("getstat/{typeA}")
    public Map<String,Long> getStat(@PathVariable long typeA) {
        HashMap<String, Long> map = new HashMap<>();
        Skieur s = iSkieur.findById(typeA);
        if (s == null) {
            map.put("skieur introuvable",0L);
            return map;
        }
        long pistes = s.getPistes().size();
        long inscriptions = iSkieur.getInscriptionsCount(typeA);
        map.put("pistes",pistes);
        map.put("inscriptions",inscriptions);
        return map;
    }
}
