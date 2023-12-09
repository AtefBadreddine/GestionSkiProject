import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementDeleteComponent } from './abonnement-delete.component';

describe('AbonnementDeleteComponent', () => {
  let component: AbonnementDeleteComponent;
  let fixture: ComponentFixture<AbonnementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
