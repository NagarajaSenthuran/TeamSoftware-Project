<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Booking::all();
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
        //
        $booking = new Booking;
        $booking->Name=$request->Name;
        $booking->User_email=$request->User_email;
       // $booking->Vehicle_id = $request->Vehicle_id;
        $booking->Start_date = $request->Start_date;
        $booking->End_date = $request->End_date;
        $booking->Message = $request->Message;
        $booking->Car_Type = $request->Car_Type;
        $booking->Status = $request->Status;
        $booking->Posting_date = $request->Posting_date;
        $booking->Registration_date = $request->Registration_date;
        $booking->Updation_date = $request->Updation_date;

        $result=$vehicle->save();
        if($result)
        {
            return["Result"=>"Vehicle record created"];
        }
        else{
            return["Result"=>"error"];
        }
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
    public function getbyId($id=null) {
        return $id?Booking::find($id):Booking::all();
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
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
