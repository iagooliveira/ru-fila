import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCriaFuncionarioComponent } from './form-cria-funcionario.component';

describe('FormCriaFuncionarioComponent', () => {
  let component: FormCriaFuncionarioComponent;
  let fixture: ComponentFixture<FormCriaFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCriaFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCriaFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
