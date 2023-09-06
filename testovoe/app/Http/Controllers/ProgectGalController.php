<?php

namespace App\Http\Controllers;

use App\Models\ProgectGal;
use Illuminate\Http\Request;

class ProgectGalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProgectGal::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);
    
        return ProgectGal::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(ProgectGal $progectGal)
    {
        return $progectGal;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProgectGal $progectGal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProgectGal $progectGal)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);
    
        $progectGal->update($request->all());
    
        return $progectGal;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProgectGal $progectGal)
    {
        $progectGal->delete();
        
        return response()->json(['message' => 'Project deleted successfully']);
    }
}
