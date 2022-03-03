import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhVagasComponent } from './rh-vagas.component';

describe('RhVagasComponent', () => {
  let component: RhVagasComponent;
  let fixture: ComponentFixture<RhVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
