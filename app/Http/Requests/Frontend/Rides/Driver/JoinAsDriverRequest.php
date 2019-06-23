<?php

namespace App\Http\Requests\Frontend\Rides\Driver;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class JoinAsDriverRequest.
 */
class JoinAsDriverRequest extends FormRequest
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
            'car_id' => ['required'],
            'driverArrivalTime' => ['required'],
        
            
        ];
    }

    /**
     * @return array
     */
     public function messages()
    {
        return [
            'car_id.required' => 'You must have selected a car before you can drive',
            'driverArrivalTime' => 'You must have specified a time when you will arrive at the pickup location'
      
        ];
    } 
}
