import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSkieurComponent } from './update-skieur.component';

describe('UpdateSkieurComponent', () => {
  let component: UpdateSkieurComponent;
  let fixture: ComponentFixture<UpdateSkieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSkieurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSkieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
