import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (localStorage.getItem("token")) {
            console.log("TOKEN!");
            return true;

        }
        console.log("INTE TOKEN");
        return true;
        this.router.navigateByUrl("/auth/login");
        //   return true;
    }
}