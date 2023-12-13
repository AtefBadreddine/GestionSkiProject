import { Component, OnInit } from '@angular/core';
import { CoursService } from "../../../services/cours.service";
import { Cours } from "../../../models/cours";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.scss']
})
export class ListCoursComponent implements OnInit {

  listCours: Cours[] = [];

  constructor(private coursService: CoursService, private router: Router ,     private snackBar: MatSnackBar,
) {}

  ngOnInit() {
    this.coursService.getAllCours().subscribe(
      (res: Cours[]) => {
        this.listCours = res;
      },
      (error) => {
        console.error('Error fetching cours:', error);
      }
    );
  }

  deleteCours(id: number) {
    this.coursService.deleteCours(id).subscribe(
      (res) => {

          this.listCours = this.listCours.filter(cours => cours.numCours !== id);
          this.showConfirmationMessage('Course deleted successfully!');

          //this.router.navigateByUrl(this.router.url);
          this.router.navigate(['cours']);

      },
      (error) => {
        this.showConfirmationMessage('Error deleting Course');


        console.error('Error deleting cours:', error);
      }
    );
  }

  openDeleteModal(coursId: number) {
    const modal = document.getElementById(`popup${coursId}`);
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeDeleteModal(coursId: number) {
    const modal = document.getElementById(`popup${coursId}`);
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  private showConfirmationMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
