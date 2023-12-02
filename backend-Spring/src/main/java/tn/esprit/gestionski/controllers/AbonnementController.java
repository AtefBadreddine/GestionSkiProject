package tn.esprit.gestionski.controllers;

import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.gestionski.entities.Abonnement;
import tn.esprit.gestionski.entities.TypeAbonnement;
import tn.esprit.gestionski.services.AbonnementServiceImp;

import java.util.Date;
import java.util.List;
import java.util.Set;

@RestController
public class AbonnementController {

    @Autowired
    AbonnementServiceImp abonnementServiceImp;


    @GetMapping("/abonnementByType/{type}")
    Set<Abonnement> findByTypeAbonnemnt(@PathVariable TypeAbonnement type) {
       return abonnementServiceImp.getAbonnementByType(type);
    }
    @GetMapping("/abonnementBetween2Date/{date1}/{date2}")
    List<Abonnement> findBetween2Dates(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date1, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date2) {
        return abonnementServiceImp.findBy2DateDebut(date1,date2);
    }
}
