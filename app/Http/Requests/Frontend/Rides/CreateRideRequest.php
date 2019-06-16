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
'pickupLocation' => ['required', 'string'],
'dropoffLocation' => ['required', 'string'],
'scheduledTime'  => ['sometimes'],
'scheduledDate'  => ['required'],
'rideNotes' => [ 'max:6500'],
'rideOption'  => ['required'],
'travelTime'  => ['required'],
'totalDistance'  => ['required'],
'availableSeats' => ['required_if:seatsNeeded,'],
'seatsNeeded' => ['required_if:,availableSeats'],
'car' => ['string'],
'ameninityOptions' => ['sometimes'],
'luggageSpaceAvailable' => ['required_if:luggageSpaceNeeded,'],
'luggageSpaceNeeded' => ['required_if:luggageSpaceAvailable,'],
'childSeatsNeeded' => ['sometimes'],
'askingPriceOption' => ['required_if:askingPriceOffer,'],
'askingPriceOffer' => ['required_if:askingPriceOption,'],
'pickupsOfferd' => ['sometimes'],
'pickupPrice' => ['sometimes'],

            
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
