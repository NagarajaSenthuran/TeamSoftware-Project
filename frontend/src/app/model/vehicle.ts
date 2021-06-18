import { IVehicleBase } from './ivehiclebase';
export class Vehicle implements IVehicleBase{
    id: number;
    vehicle_name: string;
    vehicle_brand: string;
    vehicle_overview: string;
    price_per_day: number;
    fuel_type:string;
    model_year:number;
    seating_capacity:number;
    veh_img?: string;
    is_available:boolean;
}