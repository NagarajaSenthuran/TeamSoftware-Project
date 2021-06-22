import { VehiclesService } from './../services/vehicles.service';
//import { Vehicle } from './../model/vehicle';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../model/vehicle';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  public vehicleId: number;
  vehicle = new Vehicle();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];



  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehiclesService: VehiclesService) { }

  ngOnInit(): void {

    this.vehicleId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data:Vehicle)=>{
      this.vehicle=data['ve'];
    }
    );
    // this.route.params.subscribe(
    //   (params) => {
    //     this.vehicleId = +params['id'];
    //     this.vehiclesService.getVehicle(this.vehicleId).subscribe(
    //       (data: Vehicle) => {
    //         this.vehicle = data;
    //       }
    //     );
    //   }
    // );
  
  
    this.galleryOptions = [
      {
        width: '90%',
        height: '480px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/lambo.jpg',
        medium: 'assets/lambo.jpg',
        big: 'assets/lambo.jpg'
      },
      {
        small: 'assets/lambo1.jpg',
        medium: 'assets/lambo1.jpg',
        big: 'assets/lambo1.jpg'
      },
      {
        small: 'assets/lambo2.jpg',
        medium: 'assets/lambo2.jpg',
        big: 'assets/lambo2.jpg'
      },{
        small: 'assets/lambo3.jpg',
        medium: 'assets/lambo3.jpg',
        big: 'assets/lambo3.jpg'
      },
      {
        small: 'assets/lambo4.jpg',
        medium: 'assets/lambo4.jpg',
        big: 'assets/lambo4.jpg'
      }
    ];
  
  
  }
  goToBooking() {
    console.log('vame');
    
    this.router.navigate(['/booking'], {queryParams: {  id: this.vehicle.id}});
  }


}
