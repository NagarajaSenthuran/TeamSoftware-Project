import { catchError, map } from 'rxjs/operators';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from './../model/vehicle';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesDetailsResolverService implements Resolve<Vehicle>{

  constructor(private router: Router,  private vehiclesService: VehiclesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Vehicle>|Vehicle {
      const vehId = route.params['id'];
      return this.vehiclesService.getVehicle(+vehId).pipe(
        catchError(error => {
          this.router.navigate(['/']);
          return of(null);
        })
      );
  }
  }