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
            'ride_name' => ['required', 'max:280', 'unique:rides'],
            'ride_notes' => ['required', 'max:6500'],
            'total_distance' => ['required'],
            'travel_time' => ['required'],
            'option' => ['required'],
            
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
            'ride_name.required' => 'Please Name This Ride',
            'ride_name.unique' => 'A ride names cannot be the same as previous rides',
            'option.required' => 'You must determine wheather you are a passenger or a driver for this ride.',
        ];
    } 
}
