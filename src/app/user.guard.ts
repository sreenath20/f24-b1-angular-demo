import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  console.log("inside user guard");
  return localStorage.getItem("role")=="user";
};
