<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Booking::all();
       // return Booking::all();
    //    $booking = Booking::all();
    //    return new BookingResource($booking);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $booking = Booking::create($request->all());
        // return response($booking, 201);
        //
                    //   $vehicle=Vehicle::find($id);
                      $booking = new Booking;
                     
                      //$booking->User_email=$request->User_email;
                      $booking->vehicle_id = $request->vehicle_id;
                      $booking->name=$request->name;
                      $booking->email=$request->email;
                      $booking->phone_no=$request->phone_no;
                      $booking->start_date = $request->start_date;
                      $booking->end_date = $request->end_date;
                      $booking->car_Type = $request->car_Type;
                      $booking->status = $request->status;
                      $booking->posting_date = $request->posting_date;
                    

                      $booking->save();

                      Mail::send('email.name', ['data1' => $booking], function ($m) {
         
                      $m->to('kamalglobal241@gmail.com')->subject('Booking Form Mail!');
                });
                    //Json Response For Angular frontend
                
                       return response()->json([
                        "message" => "Email sent successfully."
                    ], 201);
        // if($result)
        //  {
        //      return["Result"=>"Vehicle record created"];
        //  }
        //  else{
        //      return["Result"=>"error"];
        //  }

        // return BookingResource::collection($booking->paginate());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {
        //
    }
    public function getbyId($id) {
        // return $id?Booking::find($id):Booking::all();
        $booking = Booking::find($id);
        if(is_null($booking)) {
            return response()->json(['message' => 'Booking Not Found'], 404);
        }
        return response()->json($booking::find($id), 200);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $booking = Booking::find($id);
        if(is_null($booking)) {
            return response()->json(['message' => 'Booking Not Found'], 404);
        }
        $booking->update($request->all());
        return response($booking, 200);
    //     $booking=Booking::find($request->id);
      
    //     $booking->Name=$request->Name;
    //     $booking->User_email=$request->User_email;
    //    // $booking->Vehicle_id = $request->Vehicle_id;
    //     $booking->Start_date = $request->Start_date;
    //     $booking->End_date = $request->End_date;
    //     $booking->Message = $request->Message;
    //     $booking->Car_Type = $request->Car_Type;
    //     $booking->Status = $request->Status;
    //     $booking->Posting_date = $request->Posting_date;
    //     $booking->Registration_date = $request->Registration_date;
    //     $booking->Updation_date = $request->Updation_date;

    //     $result=$vehicle->save();
    //     return BookingResource::collection($booking->paginate());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        //
        // $booking = Booking::find($id);
        // $booking->delete();
        $booking = Booking::find($id);
        if(is_null($booking)) {
            return response()->json(['message' => 'Booking Not Found'], 404);
        }
        $booking->delete();
        return response()->json(null, 204);
       
    }
}
