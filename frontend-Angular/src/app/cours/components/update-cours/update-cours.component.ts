import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../../../services/cours.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from '../../../models/cours';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.scss']
})
export class UpdateCoursComponent implements OnInit {
  coursForm: FormGroup;
  cours: Cours;
  id: string;

  constructor(
    private snackBar: MatSnackBar,

    private formBuilder: FormBuilder,
    private coursService: CoursService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.coursForm = this.formBuilder.group({
      niveau: ['', [Validators.required]],
      typeCours: ['', [Validators.required]],
      support: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      creneau: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(res => (this.id = res.get('id')));

    this.coursService.getCours(this.id).subscribe(
      (coursData: Cours) => {
        this.cours = coursData;
        // Patch the form with the Cours data
        this.coursForm.patchValue({
          niveau: coursData.niveau,
          typeCours: coursData.typeCours,
          support: coursData.support,
          prix: coursData.prix,
          creneau: coursData.creneau
        });
      },
      (error) => {
        console.error('Error fetching cours data:', error);
      }
    );
  }

  updateCours() {
    if (this.coursForm.valid) {
      let cours: Cours = this.coursForm.value;
      this.coursService.updateCours(cours).subscribe(
        (response) => {
          if (response) {
            this.showConfirmationMessage('Course updated successfully!');

            this.router.navigate(['cours']);
          } else {
            this.showConfirmationMessage('error updating course');

            console.error('Unexpected response status:');
          }
        },
        (error) => {
          this.showConfirmationMessage('error updating course');
          console.error('Error updating cours:', error);
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
