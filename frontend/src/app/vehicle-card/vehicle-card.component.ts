import { IVehicleBase } from './../model/ivehiclebase';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {
  @Input() vehicle: IVehicleBase;
  @Input() hideIcons:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
