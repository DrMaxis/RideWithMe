<?php

namespace App\Http\Requests\Frontend\Rides;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CreateRideRequest.
 */
class CreateRideRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'pickup_location' => ['required', 'string'],
            'dropoff_location' => ['required', 'string'],
            'request_date' => ['sometimes'],
            'ride_name' => ['required', 'max:280'],
            'ride_notes' => ['required'],
            'total_distance' => ['required'],
            'travel_time' => ['required'],
            'accepted_terms' => ['required'],
        ];
    }

    /**
     * @return array
     */
     public function messages()
    {
        return [
            'total_distance.required' => 'Please Calculate the Route for the Travel Distance',
            'travel_time.required' => 'Please Calculate the Route for the Travel Time',
            'ride_name.required' => 'Please Name This Ride'
        ];
    } 
}
