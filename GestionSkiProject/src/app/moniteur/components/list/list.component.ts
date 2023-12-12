import { Component } from '@angular/core';
import { Service } from "../../../services/moniteur.service";
import { Moniteur } from "../../../models/moniteur";

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  listDefault: Moniteur[] = [];
  listAll: Moniteur[] = [];
  constructor(private service: Service) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      (res: Moniteur[]) => {
        this.listDefault = res;
        this.listAll = this.listDefault;
      },
      (error) => {
        console.error('Error fetching moniteurs:', error);
      }
    );
  }

  remove(id: number) {
    this.service.remove(id).subscribe(
      (res) => {
        console.log(res)
          

      }
    )
    this.listAll = this.listAll.filter(moniteur => moniteur.numMoniteur !== id);
  }

  sortAsc() {
    this.listAll.sort((a, b) => {
      const date1 = new Date(a.dateRecru).getTime();
      const date2 = new Date(b.dateRecru).getTime();
      return date1 - date2;
    });
  }

  sortDesc() {
    this.listAll.sort((a, b) => {
      const date1 = new Date(a.dateRecru).getTime();
      const date2 = new Date(b.dateRecru).getTime();
      return date2 - date1;
    })
  }

  handleSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const prompt = inputElement.value.toLocaleLowerCase();
    console.log(prompt);
    if (prompt.localeCompare("") == 0) {
      this.listAll = this.listDefault;
    } else {
      this.listAll = this.listAll.filter((item) =>
      (
        (item.nomM.toLocaleLowerCase().includes(prompt))
        || (item.prenomM.toLocaleLowerCase().includes(prompt))
        || (item.dateRecru.toString().toLocaleLowerCase().includes(prompt))
        || (item.numMoniteur.toString().toLocaleLowerCase().includes(prompt))
      ));
    }

    /*(
        (item.nomM.localeCompare(prompt))
        || (item.prenomM == prompt)
        || (item.dateRecru.toString() == prompt)
        || (item.numMoniteur.toString() == prompt)
      ) */
  }

}
