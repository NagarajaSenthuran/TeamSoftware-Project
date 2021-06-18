<?php

namespace App\Http\Controllers;

use App\Models\Testimnial;
use Illuminate\Http\Request;

class TestimnialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Testimnial::all(), 200);
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
        $testimnial = Testimnial::create($request->all());
        return response($testimnial, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Testimnial  $testimnial
     * @return \Illuminate\Http\Response
     */
    public function getTestimnialById($id) {
        $testimnial = Testimnial::find($id);
        if(is_null($testimnial)) {
            return response()->json(['message' => 'Testimnial Not Found'], 404);
        }
        return response()->json($testimnial::find($id), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Testimnial  $testimnial
     * @return \Illuminate\Http\Response
     */
    public function edit(Testimnial $testimnial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Testimnial  $testimnial
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $testimnial = Testimnial::find($id);
        if(is_null($testimnial)) {
            return response()->json(['message' => 'Testimnial Not Found'], 404);
        }
        $testimnial->update($request->all());
        return response($testimnial, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Testimnial  $testimnial
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $testimnial = Testimnial::find($id);
        if(is_null($testimnial)) {
            return response()->json(['message' => 'Testimnial Not Found'], 404);
        }
        $testimnial->delete();
        return response()->json(null, 204);
    }
}
