package tn.esprit.gestionski.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import jakarta.mail.Message;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.entities.Moniteur;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.repositories.MoniteurRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class MoniteurServiceImp implements IMoniteur{

    @Autowired
    private CoursRepository cr;

    @Autowired
    private MoniteurRepository mr;
    
    @Autowired
	private JavaMailSender emailSender;
    
    @Override
    public Moniteur addMoniteurAndAssignToCours(Moniteur m, long numCours) {
        Cours cours = cr.findById(numCours).orElse(null);
        m.getCours().add(cours);
        return mr.save(m);
    }
	@Override
	public Moniteur save(Moniteur m) {
		return mr.save(m);
	}

	@Override
	public Moniteur update(Moniteur m) {
		Moniteur old = mr.findById(m.getNumMoniteur()).orElse(null);
		old.setNomM(m.getNomM());
		old.setDateRecru(m.getDateRecru());
		old.setPrenomM(m.getPrenomM());
		return mr.save(old);
	}

	@Override
	public List<Moniteur> get_all() {
		// TODO Auto-generated method stub
		return mr.findAll();
	}
	@Override
	public void remove(long id) {
		mr.deleteById(id);
		
	}
	@Override
	public Moniteur get_one(long id) {
		return mr.findById(id).orElse(null);
	}
	@Override
	public Moniteur assign_cours(long id, long cours_id) {
		Moniteur m = mr.findById(id).orElse(null);
		Cours c = cr.findById(cours_id).orElse(null);
		if((m == null)||(c == null)) {
			return null;
		}
		m.getCours().add(c);
		c.setMoniteur(m);
		
		return mr.save(m);
	}
	
	@Override
	public List<Moniteur> date_sorted(int order) {
		if(order == 0) {
			return mr.date_asc();
		} else {
			return mr.date_desc();
		}
	}
	@Override
	public Moniteur notify_skieur(long id, long cours_id) {
		Moniteur m = mr.findById(id).orElse(null);
		Cours c = cr.findById(cours_id).orElse(null);
		System.out.println(m.getPrenomM());
		System.out.println(c.getPrix());
		if((m == null)||(c == null)) {
			System.out.println("empty");
			return null;
		}

		cr.getRelatedCours(c.getNumCours()).forEach(i -> {
			System.out.println(i.getSkieur().getEmail());
			MimeMessagePreparator preparator = new MimeMessagePreparator() {
				@Override
	            public void prepare(MimeMessage mimeMessage) throws Exception {
	                mimeMessage.setRecipient(Message.RecipientType.TO,
	                        new InternetAddress(i.getSkieur().getEmail()));
	                mimeMessage.setFrom(new InternetAddress("khalil.khemiri@esprit.tn"));
	                mimeMessage.setSubject("Notification");
	                mimeMessage.setText("Bonjour Mr/Mme " + i.getSkieur().getPrenomS() + " " + i.getSkieur().getNomS() +"\n"
									+"Notification cours \n" + c.getTypeCours()  + "\n"
									+"Tchao!\n\nEquipe Gestion Ski\n2023 "
	                		);
	            }
	        };
			
	    	emailSender.send(preparator);
		});
		
		
		return m;
	}
	@Override
	public List<Cours> get_cours(long id) {
		/*List<Cours> list = cr.findAll();
		List<Cours> res = new ArrayList<Cours>();
		for(Cours c : list) {
			if(c.getMoniteur().getNumMoniteur() == id) {
				res.add(c);
			}
		}*/
		return cr.getCoursWithMoniteur(id);
	}
}
