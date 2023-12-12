import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent {
  listInsc : any[] = [] ;
  listInsc_copy:any[]=[]
  inscriptionId
  constructor(private inscriptionService: InscriptionService,private router:Router)
  {
      this.inscriptionService.findAll().subscribe(res=>{
        this.listInsc=res
        this.listInsc_copy=this.listInsc
      },err=>{
        console.log(err)
      })
  }
  deleteInscription(numInscription:any)
  {
      this.inscriptionService.deleteById(numInscription).subscribe(res=>{
        window.location.reload();

      },err=>{
        console.log(err)
      })
  }

  filterInscriptions()
  {
    this.listInsc=this.listInsc_copy

 if(this.inscriptionId!='')
  {
    var list =[]
    for (const inscription of this.listInsc)
    {
      if(inscription.numInscription == this.inscriptionId)
      list.push(inscription)
    }
    
  this.listInsc=list
  }
  else
  {
    this.listInsc=this.listInsc_copy
  }
  }
  redirectToAdd()
  {
    this.router.navigate(['/inscriptions/add'])
  }
}
