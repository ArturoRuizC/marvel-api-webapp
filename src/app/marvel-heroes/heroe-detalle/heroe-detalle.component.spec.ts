import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDetalleComponent } from './heroe-detalle.component';

describe('HeroeDetalleComponent', () => {
  let component: HeroeDetalleComponent;
  let fixture: ComponentFixture<HeroeDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeDetalleComponent]
    });
    fixture = TestBed.createComponent(HeroeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
