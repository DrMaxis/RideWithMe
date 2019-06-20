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
'availableSeats' => ['required_if:seatsNeeded,null'],
'seatsNeeded' => ['required_if:,availableSeats,null'],
'car' => ['string'],
'ameninityOptions' => ['sometimes'],
'luggageSpaceAvailable' => ['required_if:luggageSpaceNeeded,null'],
'luggageSpaceNeeded' => ['sometimes'],
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
            'availableSeats.required_if' => 'You must determine the amount of available seats if you are creating a ride as a driver',
            'seatsNeeded.required_if' => 'You must determine the amount of seats you need if you are creating a ride',
            'askingPriceOption.required_if' => 'You must either choose a price option or input your asking price offer',
            'askingPriceOffer.required_if' => 'You must either choose a price option or input your asking price offer',
            'luggageSpaceAvailable.required_if' => 'You must determine the amount of luggage space available if you are creating a ride as a driver',

        ];
    } 
}
