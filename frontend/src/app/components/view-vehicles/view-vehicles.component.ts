import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.scss']
})
export class ViewVehiclesComponent implements OnInit {
  vehicleArray :any;
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesService.getAllVehicles().subscribe(res=>{
      console.log(res);
      this.vehicleArray = res
     })
  }

}
