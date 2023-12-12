import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { SkieurService } from 'src/app/services/skieur.service';

@Component({
  selector: 'app-update-inscription',
  templateUrl: './update-inscription.component.html',
  styleUrls: ['./update-inscription.component.scss']
})
export class UpdateInscriptionComponent {

cours:any[]
skieurs:any[]
InscForm : FormGroup
id:string
constructor(private fb: FormBuilder,private skieurService:SkieurService,private coursService:CoursService,
  private inscriptionService:InscriptionService,private router: Router,private activatedRoute :ActivatedRoute) {
    this.InscForm = this.fb.group({
      numSemaine: [''],
      numCours:[''],
      numSkieurs:['']
    });
  }
ngOnInit()
{
  this.activatedRoute.paramMap.subscribe(res  => this.id = res.get('id'));
  this.inscriptionService.getInscriptionById(this.id).subscribe(res=>{

    this.InscForm.patchValue({
      numSemaine: res.numSemaine,
      numCours:res.cours.numCours,
      numSkieurs:res.skieur.numSkieur
    })
  })

  this.skieurService.getAllSkieurs().subscribe(res=>{
    this.skieurs=res
  },err=>{
    console.log(err)
  })
  this.coursService.getAllCours().subscribe(res=>{
    this.cours=res
  },err=>{
    console.log(err)
  })
}
updateInscription()
{
  let inscription={
    numInscription :this.id,
    numSemaine : this.InscForm.get('numSemaine').value
  }

  this.inscriptionService.addInscriptionAndAssignToSkierAndCours(inscription,this.InscForm.get('numCours').value,this.InscForm.get('numSkieurs').value).subscribe(res=>{
    this.router.navigate(['/inscriptions/'])
  },err=>{
    console.log(err)
  })
}
}
