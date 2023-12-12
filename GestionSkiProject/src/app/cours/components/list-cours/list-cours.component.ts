import { Component, OnInit } from '@angular/core';
import { CoursService } from "../../../services/cours.service";
import { Cours } from "../../../models/cours";
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.scss']
})
export class ListCoursComponent implements OnInit {

  listCours: Cours[] = [];

  constructor(private coursService: CoursService, private router: Router) {}

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
        if (res.status === 200) {
          this.listCours = this.listCours.filter(cours => cours.numCours !== id);
          this.router.navigateByUrl(this.router.url);
        }
      },
      (error) => {
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
}
