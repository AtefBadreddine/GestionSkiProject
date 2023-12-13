package tn.esprit.gestionski.controllers;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.services.ICours;

import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "application/json")
@RequestMapping("/cours")
public class CoursController {

    @Autowired
    private ICours coursService;

    @PostMapping(value = "/add", produces = "application/json", consumes = "application/json")
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
