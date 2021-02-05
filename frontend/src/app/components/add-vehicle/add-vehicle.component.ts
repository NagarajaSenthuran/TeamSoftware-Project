
import { VehiclesService } from './../../services/vehicles.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  form:FormGroup
  files:any;
  VehiclesService: any;
  dataArr: any;
  filedata: any;
  selectedFile: File = null;
  constructor(private http: HttpClient,private fb:FormBuilder,private vehiclesService:VehiclesService, private router:Router) { }
 
  ngOnInit(): void {
      this.form = this.fb.group({
      vehicle_name:['',Validators.required],
      vehicle_brand:['',Validators.required],
      vehicle_overview:['',Validators.required],
      price_per_day:['',Validators.required],
      fuel_type:['',Validators.required],
      model_year:['',Validators.required], 
      seating_capacity:['',Validators.required],
      veh_img:['',Validators.required], 
      registration_date:['',Validators.required],
      updation_date:['',Validators.required],
    });
  }

  
  fileEvent(e){
    this.filedata = e.target.files[0];
}
  // getVehicleData(){
  //   this.VehiclesService.getAllVehicles().subscribe(res=>{
  //     this.dataArr=res;
  //   })
  // }
  // insertData()
  // {
  //   let formdata = new FormData();
  //   formdata.append("file",this.files,this.files.name);
  //   this.VehiclesService.insertData(formdata).subscribe(res=>{
  //     this.getVehicleData();
  //   })
  // }

  onFileSelected(event)
  {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
    
  }

  onUpload(){
  const fd = new FormData();
  fd.append('image',this.selectedFile,this.selectedFile.name);
  this.http.post<any>('http://localhost:8000/api/vehicles',fd).subscribe(res=>
    {
      console.log(res)
    }
  )
  }
  
  onSubmit(form){
    if(this.form.valid){
      this.vehiclesService.saveVehicle(form).subscribe(res=>{
        if (res)
        {
          this.router.navigate(['/'])
        }
      })
    }
 }

  onSubmitform(f: NgForm) {
       
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('image', this.filedata);
    /* Image Post Request */
    this.http.post('http://localhost:8000/api/sample-restful-apis', myFormData, {
    headers: headers
    }).subscribe(data => {
     //Check success message
     //sweetalert message popup
      Swal.fire({
           title: 'success',
           text:   data['message'],
           icon: 'success'
       });
    });  

}

  
}
