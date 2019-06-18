<?php

namespace App\Http\Requests\Frontend\Rides\Passenger;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class JoinRideRequest.
 */
class JoinRideRequest extends FormRequest
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
            'pickupLocation' => ['sometimes'],
            'seatsNeeded' => ['required'],
            'luggageSpaceNeeded' => ['sometimes'],



        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [];
    }
}
