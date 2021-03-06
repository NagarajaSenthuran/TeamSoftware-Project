<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicle;

class VehicleController extends Controller
{
    //
    public function show()
    {
            // $vehicle=Vehicle::all();
            // return response()->json($vehicle);
            return Vehicle::all();
    }

    public function upload(Request $request)
    {
      // if ($request->hasFile('image'))
      // {
      //       $file      = $request->file('image');
      //       $filename  = $file->getClientOriginalName();
      //       $extension = $file->getClientOriginalExtension();
      //       $picture   = date('His').'-'.$filename;
      //       //move image to public/img folder
      //       $file->move(public_path('img'), $picture);

      //    return response()->json(["message" => "vehicle Uploaded Succesfully"]);
      //   }
      //   else
      //   {
      //         return response()->json(["message" => "vehicle not added"]);
      //   }
        $vehicle = new Vehicle;
        if ($request->hasFile('veh_img')){
         $completeFileName = $request->file('veh_img')->getClientOriginalName();
         $fileNameOnly = pathinfo($completeFileName,PATHINFO_FILENAME);
         $extension = $request->file('veh_img')->getClientOriginalExtension();
         $compPic   = str_replace(' ','_',$fileNameOnly).'-'.rand().'_'.time().'.'.$extension;
         //move image to public/img folder
         $path->$request->file('veh_img')->storeAs('public/img', $compPic);
         $vehicle->veh_img=$compPic;
        }

        if($vehicle->save())
        {
          return['status'=>true];
        }
         else{
          return['status'=>false];
         }

    }

    public function addVehicle(Request $request)
    {
        //  $uploadimage = $request->file->store('public/uploads');
                  // $file = $request->file('file');
                  // $uploadPath="public/img";
                  // $orginalImage = $file->getClientOriginalName();
                  // dd($orginalImage);
        $vehicle = new Vehicle;
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $filename = "vehicle-img-".time().'.'.$extension;
        $file->move('img', $filename);
        


        // $completeFileName = $request->file('file')->getClientOriginalName();
        // $fileNameOnly = pathinfo($completeFileName,PATHINFO_FILENAME);
        // $extension = $request->file('file')->getClientOriginalExtension();
        // $compPic   = str_replace(' ','_',$fileNameOnly).'-'.rand().'_'.time().'.'.$extension;
        //  //   //move image to public/img folder
        // $path->$request->file('file')->storeAs('public/img', $compPic);
        // $vehicle->veh_img=$compPic;

        //  if ($request->hasFile('veh_img')){
        //   $completeFileName = $request->file('veh_img')->getClientOriginalName();
        //   $fileNameOnly = pathinfo($completeFileName,PATHINFO_FILENAME);
        //   $extension = $request->file('veh_img')->getClientOriginalExtension();
        //   $compPic   = str_replace(' ','_',$fileNameOnly).'-'.rand().'_'.time().'.'.$extension;
        //   //move image to public/img folder
        //   $path->$request->file('veh_img')->storeAs('public/img', $compPic);
        //   $vehicle->veh_img=$compPic;
        // }

      //  $vehicle->vechile_id=$request->vechile_id;
         $vehicle->vehicle_name=$request->vehicle_name;
         $vehicle->vehicle_brand = $request->vehicle_brand;
         $vehicle->vehicle_overview = $request->vehicle_overview;
         $vehicle->price_per_day = $request->price_per_day;
         $vehicle->fuel_type = $request->fuel_type;
         $vehicle->model_year = $request->model_year;
         $vehicle->seating_capacity = $request->seating_capacity;
         $vehicle->veh_img= $filename;
       
         $vehicle->is_available = $request->is_available;
         $vehicle->registration_date = $request->registration_date;
         $vehicle->updation_date = $request->updation_date;
         $vehicle->save();

        //  if($vehicle->save())
        // {
        //   return['status'=>true];
        // }
        // else{
        //   return['status'=>false];
        // }

         return response()->json([
             "message" => "Vehicle record created"
         ], 201);

        //  $result=$vehicle->save();
        //  if($result)
        //  {
        //      return["Result"=>$result];
        //  }
        //  else{
        //      return["Result"=>"error"];
        //  }
    }

//     public function addVehicle(Request $request){
//       $file = $request->file('veh_img');
//       $uploadPath="public/img";
//       $orginalImage = $file->getClientOriginalName();
//       $file->move($uploadPath,$orginalImage);
//       $vehicleData = json_decode($request->date,true);
//       $vehicleData["Image"]=$orginalImage;
//       dd($orginalImage);
//       $vehicle=new Vehicle();
//       $data=$vehicle->addVehicle($vehicleData);
//  }

    public function getAllVehicle() {
        // $vehicle = Vehicle::get()->toJson(JSON_PRETTY_PRINT);
        // return response($vehicle, 200);
        return Vehicle::all();
    }

      public function getVehicle($id=null) {
        return $id?Vehicle::find($id):Vehicle::all();
        // if (Vehicle::where('id', $id)->exists()) {
        //     $vehicle = Vehicle::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
        //     return response($vehicle, 200);
        //   } else {
        //     return response()->json([
        //       "message" => "Vehicle not found"
        //     ], 404);
        //   }
      }

      public function updateVehicle(Request $request) {

        $vehicle=Vehicle::find($request->id);
        $vehicle->Vehicle_name=$request->Vehicle_name;
        $vehicle->Vehicle_brand = $request->Vehicle_brand;
        $vehicle->Vehicle_overview = $request->Vehicle_overview;
        $vehicle->Price_per_day = $request->Price_per_day;
        $vehicle->Fuel_type = $request->Fuel_type;
        $vehicle->Model_year =$request->Model_year;
        $vehicle->Seating_capacity =$request->Seating_capacity;
        $vehicle->veh_img = $request->veh_img;
        $vehicle->is_available = $request->is_available;
        $vehicle->Registration_date = $request->Registration_date;
        $vehicle->Updation_date = $request->Updation_date ;

        $result=$vehicle->save();
        if ($result)
        {
          return["Result"=>"records updated successfully"];
        }
        else
        {
          return["Result"=>"update operation failed"];
        }
        // if (Vehicle::where('id', $id)->exists()) {
        //     $vehicle = Vehicle::find($id);
        //    // $vehicle->vechile_id = is_null($request->vechile_id) ? $vehicle->vechile_id : $request->vechile_id;
        //      $vehicle->vechile_Name = is_null($request->vechile_Name) ? $vehicle->vechile_Name : $request->vechile_Name;
        //      $vehicle->vechile_brand = is_null($request->vechile_brand) ? $vehicle->vechile_brand : $request->vechile_brand;
        //      $vehicle->vehile_overview = is_null($request->vehile_overview) ? $vehicle->vehile_overview : $request->vehile_overview;
        //      $vehicle->price_per_day = is_null($request->price_per_day) ? $vehicle->price_per_day : $request->price_per_day;
        //      $vehicle->fuel_type = is_null($request->fuel_type) ? $vehicle->fuel_type : $request->fuel_type;
        //      $vehicle->model_year = is_null($request->model_year) ? $vehicle->model_year : $request->model_year;
        //      $vehicle->seating_capacity = is_null($request->seating_capacity) ? $vehicle->seating_capacity : $request->seating_capacity;
        //      $vehicle->veh_img = is_null($request->veh_img) ? $vehicle->veh_img:$request->veh_img;
        //      $vehicle->registation_date = is_null($request->registation_date) ? $vehicle->registation_date : $request->registation_date;
        //      $vehicle->updation_date = is_null($request->updation_date) ? $vehicle->updation_date : $request->updation_date;

        //     $vehicle->save();

        //     return response()->json([
        //         "message" => "records updated successfully"
        //     ], 200);
        //     } else {
        //     return response()->json([
        //         "message" => "Vehicle not found"
        //     ], 404);

        //       }
         }


         public function deleteVehicle ($id) {
          $vehicle=Vehicle::find($id);
          $result=$vehicle->delete();
          if ($result)
        {
          return["Result"=>"records deleted successfully"];
        }
        else
        {
          return["Result"=>"delete operation failed"];
        }
          // if(Vehicle::where('id', $id)->exists()) {
            //   $vehicle = Vehicle::find($id);
            //   $vehicle->delete();

            //   return response()->json([
            //     "message" => "records deleted"
            //   ], 202);
            // } else {
            //   return response()->json([
            //     "message" => "Vehicle not found"
            //   ], 404);
            // }
          }
}
