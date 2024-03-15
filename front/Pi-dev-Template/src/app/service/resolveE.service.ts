import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverE implements Resolve<boolean> {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Your condition
    const shouldNavigate = localStorage.getItem("employe"); // Replace this with your actual condition
   
    if (shouldNavigate) {
        
      return of(true);
    } else {
      // Navigate to a different route or handle the else case
      this.router.navigate(['login']);
      return of(false);
    }
  }
}