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

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private coursService: CoursService,
    private router: Router
  ) { }

  ngOnInit() {
    this.coursForm = this.formBuilder.group({
      niveau: ["", [Validators.required]],
      typeCours: ["", [Validators.required]],
      support: ["", [Validators.required]],
      prix: ["", [Validators.required]],
      creneau: ["", [Validators.required]]
    });
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
