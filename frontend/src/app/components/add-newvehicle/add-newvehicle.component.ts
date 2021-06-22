
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
    id: null,
    vehicle_name: '',
    vehicle_brand: null,
    vehicle_overview: null,
    price_per_day: null,
    fuel_type:null,
    model_year:null,
    seating_capacity:null,
    veh_img:'',
    is_available:null,
  };
  files: any;
  form: FormGroup;

  
  
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
          vehicle_name:['',Validators.required],
          vehicle_brand:['',Validators.required],
          vehicle_overview:['',Validators.required],
          price_per_day:['',Validators.required],
          fuel_type:['',Validators.required],
          model_year:['',Validators.required], 
          seating_capacity:['',Validators.required],
        //  is_available:['',Validators.required],
      }),
      VehiclePreView:this.fb.group({
        veh_img:['',Validators.required]
      })

    });
  }

  //.....................getter method

  get VehicleDetails(){
    return this.addvehicleForm.controls.VehicleDetails as FormGroup;
  }

  get VehiclePreView(){
    return this.addvehicleForm.controls.VehiclePreView as FormGroup;
  }



  get vehicle_name() {
    return this.VehicleDetails.controls.vehicle_name as FormControl;
  }
  get vehicle_brand() {
    return this.VehicleDetails.controls.vehicle_brand as FormControl;
  }
  get vehicle_overview() {
    return this.VehicleDetails.controls.vehicle_overview as FormControl;
  }
  get price_per_day() {
    return this.VehicleDetails.controls.price_per_day as FormControl;
  }
  get fuel_type() {
    return this.VehicleDetails.controls.fuel_type as FormControl;
  }
  get model_year() {
    return this.VehicleDetails.controls.model_year as FormControl;
  }
  get seating_capacity() {
    return this.VehicleDetails.controls.seating_capacity as FormControl;
  }
   get is_available() {
  return this.VehicleDetails.controls.is_available as FormControl;
  }

  get veh_img() {
    return this.VehiclePreView.controls.veh_img as FormControl;
  }
    
  onBack() {
     this.router.navigate(['/']);
  }

  onSubmit() {
    this.nextClicked=true;
    if (this.allTabsValid()) {
      const formdata = new FormData();
      formdata.append('vehicle_name',this.vehicle_name.value)
      formdata.append('vehicle_brand',this.vehicle_brand.value)
      formdata.append('vehicle_overview',this.vehicle_overview.value)
      formdata.append('price_per_day',this.price_per_day.value)
      formdata.append('fuel_type',this.fuel_type.value)
      formdata.append('model_year',this.model_year.value)
      formdata.append('seating_capacity',this.seating_capacity.value)
      formdata.append('image',this.files)

      // formdata.append("data",JSON.stringify(this.vehicle));
       
      this.vehiclesService.addVehicle(formdata).subscribe(res=>{
        if (res)
        {
          this.alertify.success('Congrats, form Submitted');
          //console.log('VehicleName='+ this.addvehicleForm.value.VehicleDetails.VehicleName);
          console.log(this.addvehicleForm);
          this.router.navigate(['/admin']);
        }
      })

    }
    else {
      this.alertify.error('Please review the form and provide all valid entries');
    }

  }

  


  mapVehicle(): void{
    this.vehicle.id = this.vehiclesService.newVehID();
    this.vehicle.vehicle_name = this.vehicle_name.value;
    this.vehicle.vehicle_brand = this.vehicle_brand.value;
    this.vehicle.vehicle_overview = this.vehicle_overview.value;
    this.vehicle.price_per_day = this.price_per_day.value;
    this.vehicle.fuel_type = this.fuel_type.value;
    this.vehicle.model_year = this.model_year.value;
    this.vehicle.seating_capacity = this.seating_capacity.value;
   //  this.vehicle.is_available = this.is_available.value;
    this.vehicle.veh_img = this.veh_img.value;
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

  get f(){
    return this.form.controls;
  }

  UploadImg(event){
    this.files = event.target.files[0];
    console.log(this.files);
  }
  


  onSubmitImg(){
    const formdata = new FormData();
    formdata.append("veh_img",this.files,this.files.name);
    this.vehiclesService.uploadData(formdata).subscribe(res=>{
    })
  }
}
