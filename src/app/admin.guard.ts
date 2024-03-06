import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  console.log("am inside admin guard.");
  let role = localStorage.getItem("role");
  return role == "admin";
};
