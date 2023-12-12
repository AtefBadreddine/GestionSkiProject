import {Component} from '@angular/core';
import {SkieurService} from "../../../services/skieur.service";
import {Skieur} from "../../../models/skieur";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-list-skieurs',
  templateUrl: './list-skieurs.component.html',
  styleUrls: ['./list-skieurs.component.scss']
})
export class ListSkieursComponent {

  listSkieurs : Skieur[] = [] ;
  displayedSkieurs : Skieur[] = [] ;
  currentPage : number = 1;
  listSize : number = 10;
  total : number;

  constructor(private skieurService: SkieurService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParamMap;
    let page: number = parseInt(queryParams.get('page'));
    if (!page || isNaN(page) )
      page = 1;

    this.skieurService.getAllSkieurs().subscribe(
      (res: Skieur[]) => {
        this.listSkieurs = res;
        this.total = this.listSkieurs.length;

        this.currentPage = page;
        this.changePage(this.currentPage);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

  }

  changePage(page : number) {
    const queryParams = this.activatedRoute.snapshot.queryParamMap;
    let pageParam: number = parseInt(queryParams.get('page'));
    this.currentPage = page;
    /*if (pageParam !== this.currentPage) {
      this.changePageQueryParam(this.currentPage);
    }*/
    let startIndex: number = (this.currentPage-1) * this.listSize ;
    let endIndex : number = startIndex + this.listSize;
    this.displayedSkieurs = this.listSkieurs.slice( startIndex,endIndex);

}
  changePageQueryParam(newPageValue: number): void {

    const currentParams = { ...this.activatedRoute.snapshot.queryParams };

    currentParams['page'] = newPageValue;

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: currentParams,
      queryParamsHandling: 'merge'
    });
  }
  deleteS(id : number) {
      this.skieurService.deleteSkieur(id).subscribe(
        (res) => {
              if (res.status === 200) {
                this.listSkieurs = this.listSkieurs.filter(skieur => skieur.numSkieur !== id);
                this.displayedSkieurs = this.displayedSkieurs.filter(skieur => skieur.numSkieur !== id);
              }

        }
      )
  }

  filter(typeA : String) {
    this.skieurService.filterByType(typeA).subscribe(
      (res: Skieur[]) => {
        this.listSkieurs = res;
        this.total = this.listSkieurs.length;

        this.currentPage = 1;
        this.changePage(this.currentPage);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
