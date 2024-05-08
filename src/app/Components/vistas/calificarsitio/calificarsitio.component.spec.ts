import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarsitioComponent } from './calificarsitio.component';

describe('CalificarsitioComponent', () => {
  let component: CalificarsitioComponent;
  let fixture: ComponentFixture<CalificarsitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificarsitioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificarsitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
