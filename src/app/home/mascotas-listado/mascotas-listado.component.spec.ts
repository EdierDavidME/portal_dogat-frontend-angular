import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasListadoComponent } from './mascotas-listado.component';

describe('MascotasListadoComponent', () => {
  let component: MascotasListadoComponent;
  let fixture: ComponentFixture<MascotasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotasListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
