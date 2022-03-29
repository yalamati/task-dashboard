import { TestBed } from '@angular/core/testing';

import { TaskRegistrationService } from './task-registration.service';

describe('TaskRegistrationService', () => {
  let service: TaskRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
