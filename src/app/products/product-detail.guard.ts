import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  //navigation requires a router so we need a constructor to inject the router to see the route which we can use ActivatedRouteSnapshot to look
  constructor(private router: Router) {}


  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id = +next.url[1].path; //url is ['/products', {id number}]
      if (isNaN(id) || id < 1){
        alert("Invalid product Id");
        this.router.navigate(['/products'])
        return false
      }
      return true;
  }
}
