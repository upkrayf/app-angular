import { CanActivateFn } from '@angular/router';

export const individualGuard: CanActivateFn = (route, state) => {
  return true;
};
