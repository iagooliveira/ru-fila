import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCriaAlunoComponent } from './form-cria-aluno.component';

describe('FormCriaAlunoComponent', () => {
  let component: FormCriaAlunoComponent;
  let fixture: ComponentFixture<FormCriaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCriaAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCriaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
