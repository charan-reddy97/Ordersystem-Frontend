import { TestBed } from '@angular/core/testing';

import { AddnewdishService } from './addnewdish.service';

describe('AddnewdishService', () => {
  let service: AddnewdishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewdishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
