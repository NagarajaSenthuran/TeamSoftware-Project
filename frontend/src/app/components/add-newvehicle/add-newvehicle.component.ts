import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from './../../model/vehicle';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IVehicleBase } from './../../model/ivehiclebase';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { AlertifyService } from 'src/app/services/Alertify.service';


@Component({
  selector: 'app-add-newvehicle',
  templateUrl: './add-newvehicle.component.html',
  styleUrls: ['./add-newvehicle.component.scss']
})
export class AddNewvehicleComponent implements OnInit {
  //@ViewChild('Form') addvehicleForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addvehicleForm:FormGroup;
  nextClicked: boolean;
  vehicle=new Vehicle();

  vehicleView :IVehicleBase={
    Id: null,
    VehicleName: '',
    Brand: null,
    Details: null,
    Price: null,
    Fuel_Type:null,
    Model_Year:null,
    Seating_Capasity:null,
    Image:null
    
  };
  constructor(private alertify:AlertifyService, private fb: FormBuilder,private router: Router, private vehiclesService:VehiclesService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.addvehicleForm.controls['Name'].setValue('lambo');
    // });
    this.CreateAddVehicleForm();
  }

  CreateAddVehicleForm(){
  
    this.addvehicleForm = this.fb.group({
        VehicleDetails:this.fb.group({
          VehicleName:['',Validators.required],
          Brand:['',Validators.required],
          Details:['',Validators.required],
          Price:['',Validators.required],
          Fuel_Type:['',Validators.required],
          Model_Year:['',Validators.required], 
          Seating_Capasity:['',Validators.required],
      }),
      VehiclePreView:this.fb.group({
        image:['',Validators.required]
      })

    });
  }

  //.....................getter method

  get VehicleDetails(){
    return this.addvehicleForm.controls.VehicleDetails as FormGroup;
  }

  get VehicleName() {
    return this.VehicleDetails.controls.VehicleName as FormControl;
  }
  get Brand() {
    return this.VehicleDetails.controls.Brand as FormControl;
  }
  get Details() {
    return this.VehicleDetails.controls.Details as FormControl;
  }
  get Price() {
    return this.VehicleDetails.controls.Price as FormControl;
  }
  get Fuel_Type() {
    return this.VehicleDetails.controls.VehicleName as FormControl;
  }
  get Model_Year() {
    return this.VehicleDetails.controls.Model_Year as FormControl;
  }
  get Seating_Capasity() {
    return this.VehicleDetails.controls.Seating_Capasity as FormControl;
  }
    
  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.nextClicked=true;
    if (this.allTabsValid()) {
      this.mapVehicle();
      this.vehiclesService.addVehicle(this.vehicle);
      this.alertify.success('Congrats, form Submitted');
      //console.log('VehicleName='+ this.addvehicleForm.value.VehicleDetails.VehicleName);
      console.log(this.addvehicleForm);
      this.router.navigate(['/vehicle-list']);
    }
    else {
      this.alertify.error('Please review the form and provide all valid entries');
    }
  }

  mapVehicle(): void{
    this.vehicle.Id = this.vehiclesService.newVehID();
    this.vehicle.VehicleName = this.VehicleName.value;
    this.vehicle.Brand = this.Brand.value;
    this.vehicle.Details = this.Details.value;
    this.vehicle.Price = this.Price.value;
    this.vehicle.Fuel_Type = this.Fuel_Type.value;
    this.vehicle.Model_Year = this.Model_Year.value;
    this.vehicle.Seating_Capasity = this.Seating_Capasity.value;

  }


  allTabsValid(): boolean {
    if(this.VehicleDetails.invalid){
      this.formTabs.tabs[0].active = true;
      return false; 
    }
    return true;
  }

  selectTab(tabId: number,IsCurrentTabValid:boolean) {
    this.nextClicked = true;
    if(IsCurrentTabValid){
      this.formTabs.tabs[tabId].active = true; 
    }
  }

  
}
