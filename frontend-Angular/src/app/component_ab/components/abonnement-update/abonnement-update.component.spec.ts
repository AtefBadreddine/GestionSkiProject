import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementUpdateComponent } from './abonnement-update.component';

describe('AbonnementUpdateComponent', () => {
  let component: AbonnementUpdateComponent;
  let fixture: ComponentFixture<AbonnementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
