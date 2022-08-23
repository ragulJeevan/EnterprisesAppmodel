import { TestBed } from '@angular/core/testing';

import { ProductloginGuard } from './productlogin.guard';

describe('ProductloginGuard', () => {
  let guard: ProductloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
