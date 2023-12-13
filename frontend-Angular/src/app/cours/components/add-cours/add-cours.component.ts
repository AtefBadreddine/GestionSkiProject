import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CoursService } from "../../../services/cours.service";
import { Cours } from "../../../models/cours";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.scss']
})
export class AddCoursComponent implements OnInit {

  coursForm: FormGroup;
  listCours: Cours[];
  availableTypes: string[];

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private coursService: CoursService,
    private router: Router
  ) { }

  ngOnInit() {
    this.coursService.getAllCours().subscribe(
      (res: Cours[]) => {
        this.listCours = res;
        // Obtenez tous les types de cours distincts
        const uniqueTypes = [...new Set(res.map(cours => cours.typeCours))];
        // Mettez à jour votre modèle avec les types de cours uniques
        this.availableTypes = uniqueTypes;
      },
      (error) => {
        console.error('Error fetching cours:', error);
      }
    );
  }
  

  addCours() {
    if (this.coursForm.valid) {
      let cours: Cours = this.coursForm.value;
      this.coursService.addCours(cours).subscribe(
        (response) => {
          if (response) {
            this.showConfirmationMessage('Course added successfully!');

            this.router.navigate(['cours']);
          } else {
            this.showConfirmationMessage('error adding cours');

            console.error('Unexpected response status:');
          }
        },
        (error) => {
          this.showConfirmationMessage('error adding cours');

          console.error('Error adding cours:', error);
        }
      );
    }
  }
  private showConfirmationMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  get niveau() {
    return this.coursForm.get('niveau');
  }

  get typeCours() {
    return this.coursForm.get('typeCours');
  }

  get support() {
    return this.coursForm.get('support');
  }

  get prix() {
    return this.coursForm.get('prix');
  }

  get creneau() {
    return this.coursForm.get('creneau');
  }

}
