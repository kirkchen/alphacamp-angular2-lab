/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoLocalService } from './todo-local.service';

describe('Service: TodoLocal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoLocalService]
    });
  });

  it('should ...', inject([TodoLocalService], (service: TodoLocalService) => {
    expect(service).toBeTruthy();
  }));
});
