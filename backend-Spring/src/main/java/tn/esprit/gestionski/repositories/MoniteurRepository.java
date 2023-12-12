package tn.esprit.gestionski.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import tn.esprit.gestionski.entities.Moniteur;

public interface MoniteurRepository extends JpaRepository<Moniteur,Long> {
	@Query("select m from Moniteur m order by m.dateRecru asc")
	public List<Moniteur> date_asc();
	
	@Query("select m from Moniteur m order by m.dateRecru desc")
	public List<Moniteur> date_desc();
}
