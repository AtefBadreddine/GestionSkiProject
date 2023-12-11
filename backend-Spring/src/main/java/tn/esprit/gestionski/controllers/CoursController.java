package tn.esprit.gestionski.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.services.ICours;

import java.util.List;

@RestController
@RequestMapping("/cours")
@CrossOrigin(origins = "http://localhost:4200")

public class CoursController {

    @Autowired
    private ICours coursService;

    @PostMapping("/add")
    public Cours addCours(@RequestBody Cours cours) {
        return coursService.addCours(cours);
    }

    @PutMapping("/update")
    public Cours updateCours(@RequestBody Cours cours) {
        return coursService.updateCours(cours);
    }

    @GetMapping("/getall")
    public List<Cours> findAllCours() {
        return coursService.findAllCours();
    }

    @GetMapping("/get/{numCours}")
    public Cours findCoursById(@PathVariable long numCours) {
        return coursService.findCoursById(numCours);
    }

    @DeleteMapping("/delete/{numCours}")
    public ResponseEntity<String> deleteCours(@PathVariable long numCours) {
        coursService.deleteCours(numCours);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
