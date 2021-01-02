<?php

namespace App\Http\Controllers;

use App\Models\ContactQuerry;
use Illuminate\Http\Request;

use Validator;
class ContactQuerryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $contactQuerry = ContactQuerry::with('client');
        // return ContactQuerry::collection($contactQuerry->paginate(1000));
        
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
        $validator=Validator::make($request->all(),['name'=>'required','email'=>'required','phone_num'=>'required','message'=>'required','Posting_date'=>'required']);
        if($validator->passes())
        {
            $contactQuerry = new ContactQuerry;
            $contactQuerry->name=$request->name;
            $contactQuerry->email = $request->email;
            $contactQuerry->phone_num = $request->phone_num;
            $contactQuerry->message = $request->message;
            $contactQuerry->Posting_date = $request->Posting_date;
            $result=$contactQuerry->save();
            $arr = array('status'=>'true','message'=>'Your Message Successfully Send');
        }
        else 
        {
            $arr = array('status'=>'false','message'=>$validator->errors()->all());
        }
        echo json_encode($arr);
       
        //  if($result)
        //  {
        //      return["Result"=>"your message sended!"];
        //  }
        //  else{
        //      return["Result"=>"error"];
        //  }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContactQuerry  $contactQuerry
     * @return \Illuminate\Http\Response
     */
    public function show(ContactQuerry $contactQuerry)
    {
        return ContactQuerry::all();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContactQuerry  $contactQuerry
     * @return \Illuminate\Http\Response
     */
    public function edit(ContactQuerry $contactQuerry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContactQuerry  $contactQuerry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContactQuerry $contactQuerry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContactQuerry  $contactQuerry
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactQuerry $contactQuerry)
    {
        $contactQuerry=ContactQuerry::find($id);
        $result=$contactQuerry->delete();
        if ($result)
      {
        return["Result"=>"message deleted successfully"];
      }
      else
      {
        return["Result"=>"delete operation failed"];
      }
    }
}
