import { TestBed } from '@angular/core/testing';

import { ButtonManagementService } from './button-management.service';

describe('ButtonManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonManagementService = TestBed.get(ButtonManagementService);
    expect(service).toBeTruthy();
  });
});
