import { Component } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent {
  listInsc : any[] = [] ;

  constructor(private inscriptionService: InscriptionService)
  {
      this.inscriptionService.findAll().subscribe(res=>{
        this.listInsc=res
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

}
