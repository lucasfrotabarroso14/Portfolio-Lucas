import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosSectionComponent } from './projetos-section.component';

describe('ProjetosSectionComponent', () => {
  let component: ProjetosSectionComponent;
  let fixture: ComponentFixture<ProjetosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
