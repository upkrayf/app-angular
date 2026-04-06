import { CanActivateFn } from '@angular/router';

export const corporateGuard: CanActivateFn = (route, state) => {
  return true;
};
