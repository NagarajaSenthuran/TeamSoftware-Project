
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicleArray: [];

  constructor(private http: HttpClient, private vehiclesService:VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesService.getAllVehicles().subscribe(res=>{
     // this.vehicleArray = res.response.vehicles
    })
  }
}