import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { SkieurService } from 'src/app/services/skieur.service';

@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styleUrls: ['./add-inscription.component.scss']
})
export class AddInscriptionComponent {
cours:any[]
skieurs:any[]
InscForm : FormGroup
constructor(private fb: FormBuilder,private skieurService:SkieurService,private coursService:CoursService,private inscriptionService:InscriptionService,private router: Router) {}
ngOnInit()
{
  this.InscForm = this.fb.group({
    numSemaine: [''],
    numCours:[''],
    numSkieurs:['']
  });
  this.skieurService.getAllSkieurs().subscribe(res=>{
    this.skieurs=res
  },err=>{
    console.log(err)
  })
  this.coursService.findAll().subscribe(res=>{
    this.cours=res
  },err=>{
    console.log(err)
  })
}
addInscription()
{
  let inscription={
    numInscription :'',
    numSemaine : this.InscForm.get('numSemaine').value
  }

  this.inscriptionService.addInscriptionAndAssignToSkierAndCours(inscription,this.InscForm.get('numCours').value,this.InscForm.get('numSkieurs').value).subscribe(res=>{
    this.router.navigate(['/inscriptions/'])
  },err=>{
    console.log(err)
  })
}
}
