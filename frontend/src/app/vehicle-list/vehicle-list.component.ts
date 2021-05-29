import { VehiclesService } from './../services/vehicles.service';
import { IVehicle } from './../IVehicle.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
 export class VehicleListComponent implements OnInit {
  SellRent = 1;
  vehicles: Array<Vehicle>;
  VehicleName='';
  SearchName='';
  SortbyParam = '';
  SortDirection = 'asc';

  constructor(private route: ActivatedRoute, private vehiclesService: VehiclesService) { }

  ngOnInit(): void {

    // if (this.route.snapshot.url.toString()) {
    //   this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    // }  


    
    this.vehiclesService.getAllVehicles().subscribe(
      data => {
      this.vehicles = data;
      // const newVehicle=JSON.parse(localStorage.getItem('newVeh'));
      // if(newVehicle){
      //   this.vehicles = [newVehicle, ...this.vehicles];
      // }
      console.log(data);
    }, error => {
      console.log('httperror:');
      console.log(error);
    }
  );
  }
 
  onNameFilter(){
    this.SearchName = this.VehicleName;
  }

  onNameFilterClear(){
    this.SearchName = '';
    this.VehicleName='';
  }


  onSortDirection(){
   if(this.SortDirection === 'desc'){
     this.SortDirection = 'asc';
   }else
   {
     this.SortDirection = 'desc';
   }
  }
}
