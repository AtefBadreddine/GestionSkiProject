package tn.esprit.gestionski.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.gestionski.entities.Cours;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.services.ICours;

import java.util.List;

@Service
public class CoursServiceImp implements ICours {

    @Autowired
    private CoursRepository coursRepository;

    @Override
    public Cours addCours(Cours cours) {
        return coursRepository.save(cours);
    }

    @Override
    public Cours updateCours(Cours cours) {
        return coursRepository.save(cours);
    }

    @Override
    public List<Cours> findAllCours() {
        return coursRepository.findAll();
    }

    @Override
    public Cours findCoursById(long numCours) {
        return coursRepository.findById(numCours).orElse(null);
    }

    @Override
    public void deleteCours(long numCours) {
        coursRepository.deleteById(numCours);
    }


    //stat
    @Override
    public CourseStatistics getCourseStatistics() {
        List<Cours> allCourses = coursRepository.findAll();

        if (allCourses.isEmpty()) {
            return new CourseStatistics(0, 0.0, 0.0);
        }

        double totalPrices = 0.0;
        for (Cours cours : allCourses) {
            totalPrices += cours.getPrix();
        }

        double averagePrice = totalPrices / allCourses.size();

        return new CourseStatistics(allCourses.size(), totalPrices, averagePrice);
    }
    //findCourseByPriceRange
    @Override
    public List<Cours> findCoursesByPriceRange(double minPrice, double maxPrice) {
        return coursRepository.findCoursesByPrixBetween(minPrice, maxPrice);
    }
}
