import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'skieur-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() currentPage : number;
  @Input() listSize : number;
  @Input() total : number;

  @Output() newPageEvent = new EventEmitter<number>();

  pages : number = 0;

  constructor() {
  }

  changePage(value: number) {
    this.newPageEvent.emit(value);
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['listSize']) {
      this.pages = Math.ceil(this.total / this.listSize);
    }
  }


}
