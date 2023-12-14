package tn.esprit.gestionski.services;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.gestionski.entities.*;
import tn.esprit.gestionski.repositories.CoursRepository;
import tn.esprit.gestionski.repositories.InscriptionRepository;
import tn.esprit.gestionski.repositories.SkieurRepository;

import javax.swing.text.html.Option;
import java.io.*;
import java.net.MalformedURLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;
import java.util.List;

@Service
@AllArgsConstructor
public class InscriptionServiceImp implements  IInscription{


     private InscriptionRepository  inscriptionRepository;
     private SkieurRepository  skieurRepository;
     private CoursRepository coursRepository;

    @Override
    public Inscription addInscriptionAndAssignToSkieur(Inscription inscription, Long numSkieur) {
        Skieur skieur = skieurRepository.findById(numSkieur).orElse(null);
        inscription.setSkieur(skieur);
        return inscriptionRepository.save(inscription);
    }
    public Inscription addInscriptionAndAssignToCour(Inscription inscription, Long numCours){
        Cours Cour = coursRepository.findById(numCours).orElse(null);
        inscription.setCours(Cour);
        return inscriptionRepository.save(inscription);
    }

    @Override
    public List<Integer> numSemaineCoursOfMoniteurBySupport(Long numMoniteur, Support support) {
        return inscriptionRepository.numWeeksCourseOfInstructorBySupport(numMoniteur,support);
    }

    @Override
    public Inscription findById(Long Id) {
        Optional<Inscription> inscriptionOpt = this.inscriptionRepository.findById(Id);
        return inscriptionOpt.orElse(null);
    }

    @Override
    public Inscription updateInscription(Inscription inscription, Long numCours, Long numSkieur) {
        Optional<Skieur> s = skieurRepository.findById(numSkieur);
        Optional<Cours> c =  coursRepository.findById(numCours);
        return null;
    }

    @Override
    public Inscription addInscriptionAndAssignToSkierAndCours(Inscription inscription, Long numCours, Long numSkieur) throws Exception {
        Optional<Skieur> s = skieurRepository.findById(numSkieur);
        Optional<Cours> c =  coursRepository.findById(numCours);
        if ( c.isEmpty() || s.isEmpty()) {
            throw new Exception();
        }
        Date dateNaissance = s.get().getDateNaissance();
        int year = Integer.parseInt(new SimpleDateFormat("yyyy").format(dateNaissance));
        long age = LocalDate.now().getYear() - year;
        TypeCours tc = c.get().getTypeCours();
        if (tc == TypeCours.COLLECTIF_ADULTE || tc == TypeCours.COLLECTIF_ENFANT) {
           // if (inscriptionRepository.countByCoursNumCours(numCours) < 6 ) {
                if (tc == TypeCours.COLLECTIF_ENFANT && age < 18)
                    inscription.setSkieur(s.get());
                else if ( tc == TypeCours.COLLECTIF_ADULTE && age > 17)
                    inscription.setSkieur(s.get());
          //  }

        }
        else {
            inscription.setSkieur(s.get());
        }

        inscription.setCours(c.get());
        inscriptionRepository.save(inscription);
        return inscription;
    }
    public long countByCoursAndNumSemaineGreaterThan(Cours cours,int numSemaine)
    {
        return this.inscriptionRepository.countByCoursAndNumSemaineGreaterThan(cours,numSemaine);
    }

        public String toPDF(Long idInscription)
        {
            String URL_file = null;

            Inscription inscription=this.inscriptionRepository.findById(idInscription).get();


            Date d = new Date();
            SimpleDateFormat formater = null;
            formater = new SimpleDateFormat("yyyyMMdd_HHmmss");


            try {
                try {
                    try {
                        try {

                            URL_file = "C:\\Users\\med\\inscription\\" + idInscription + "_" + formater.format(d)
                                    + ".pdf";

                            OutputStream file = new FileOutputStream(new File(URL_file));


                            Font subFont = new Font(Font.FontFamily.TIMES_ROMAN, 14, Font.BOLD, BaseColor.GRAY);
                            Font catFont15B = new Font(Font.FontFamily.TIMES_ROMAN, 15, Font.BOLD, BaseColor.BLACK);
                            Font subFontPara13N = new Font(Font.FontFamily.TIMES_ROMAN, 13, Font.NORMAL, BaseColor.BLACK);
                            Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 11, Font.BOLD);

                            Document my_pdf_report = new Document();
                            PdfWriter.getInstance(my_pdf_report, file);
                            my_pdf_report.open();

                            // Dateeee
                            DateFormat df = new SimpleDateFormat("dd MMMM yyyy");
                            Paragraph dateStr = new Paragraph("Date: " + new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime()), smallBold);
                            dateStr.setAlignment(Element.ALIGN_RIGHT);


                            Paragraph description = new Paragraph(String.valueOf(inscription.getNumInscription()), subFont);
                            description.setAlignment(Element.ALIGN_LEFT);

                            // espaceee
                            Paragraph espace = new Paragraph(" ", subFont);
                            espace.setAlignment(Element.ALIGN_LEFT);

                            Paragraph para1 = new Paragraph("Numéro d'inscription " + String.valueOf(inscription.getNumInscription()), catFont15B);
                            para1.setAlignment(Element.ALIGN_LEFT);
                            // para1
                            Paragraph para2 = new Paragraph("Numéro de semaine " + String.valueOf(inscription.getNumSemaine()), catFont15B);
                            para2.setAlignment(Element.ALIGN_LEFT);
                            Paragraph para3 = new Paragraph("Nom Skieur " + inscription.getSkieur().getNomS(), catFont15B);
                            para3.setAlignment(Element.ALIGN_LEFT);
                            Paragraph para4 = new Paragraph("Type Cours " + String.valueOf(inscription.getCours().getTypeCours()), catFont15B);
                            para4.setAlignment(Element.ALIGN_LEFT);

                            // espaceee




                            my_pdf_report.add(description);
                            my_pdf_report.add(dateStr);

                            my_pdf_report.add(espace);

                            my_pdf_report.add(para1);
                            my_pdf_report.add(para2);
                            my_pdf_report.add(espace);
                            my_pdf_report.add(para3);
                            my_pdf_report.add(espace);
                            my_pdf_report.add(para4);

                            my_pdf_report.close();
                            file.close();

                            Runtime.getRuntime()
                                    .exec("rundll32 url.dll,FileProtocolHandlerC:\\Users\\mouad\\payment\\"
                                            + idInscription + "_" + formater.format(d) + ".pdf");
                            //p.waitFor(2, TimeUnit.SECONDS);

                        } catch (FileNotFoundException e) {
                            e.printStackTrace();
                        }
                    } catch (DocumentException e) {
                        e.printStackTrace();
                    }

                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
            return "" + idInscription + "_" + formater.format(d) + ".pdf";
        }
    }




