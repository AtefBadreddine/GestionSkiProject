package tn.esprit.gestionski.controllers;

import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.Message;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.entities.Moniteur;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.services.MoniteurServiceImp;

@RestController
@RequestMapping("/moniteur")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class MoniteurController {

	@Autowired
	private MoniteurServiceImp sk;
	
	@Autowired
	private CoursRepository cr;

	@PostMapping("/add")
	public Moniteur add(@RequestBody Moniteur f) {
		return sk.save(f);
	}

	@PutMapping("/update")
	public Moniteur update(@RequestBody Moniteur f) {
		return sk.save(f);
	}

	@GetMapping("/notify")
    public Moniteur notify_skieur(@RequestParam long id, @RequestParam long cours_id) {
    	return sk.notify_skieur(id, cours_id);
    }
	
	@GetMapping("/get_cours")
	public List<Cours> get_cours(@RequestParam long id){
		System.out.println(sk.get_cours(id));
		return sk.get_cours(id);
	}

	@GetMapping("/getall")
	public List<Moniteur> findAll() {
		List<Moniteur> list = sk.get_all();
		System.out.println(list);
		return list;
	}

	@GetMapping("/get/{idF}")
	public Moniteur findById(@PathVariable long idF) {
		return sk.get_one(idF);
	}

	@DeleteMapping("/delete/{idF}")
	public ResponseEntity<String> remove(@PathVariable long idF) {
		sk.remove(idF);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	@PostMapping("/add_cours")
	public Moniteur assign_cours(@RequestParam long id, @RequestParam long cours_id) {
		return sk.assign_cours(id, cours_id);
	}

	@GetMapping("/date_sorted")
	public List<Moniteur> date_sorted(@RequestParam int order) {
		return sk.date_sorted(order);
	}

	@PostMapping("/addMoniteurToCours/{numCours}")
	public Moniteur addMoniteurAndAssignToCours(@RequestBody Moniteur moniteur, @PathVariable Long numCours) {
		return sk.addMoniteurAndAssignToCours(moniteur, numCours);
	}
}
