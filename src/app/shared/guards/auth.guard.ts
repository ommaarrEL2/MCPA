import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  if (localStorage.getItem('Token')) {
    return true;
  } else {
    _router.navigate(['/']);
    return false;
  }
};
