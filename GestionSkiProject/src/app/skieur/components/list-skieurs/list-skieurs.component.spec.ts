import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkieursComponent } from './list-skieurs.component';

describe('ListSkieursComponent', () => {
  let component: ListSkieursComponent;
  let fixture: ComponentFixture<ListSkieursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSkieursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSkieursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
