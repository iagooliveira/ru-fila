import { TestBed } from '@angular/core/testing';

import { FormAlunoService } from './form-aluno.service';

describe('FormAlunoService', () => {
  let service: FormAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
