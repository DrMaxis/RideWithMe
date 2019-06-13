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
            'leave_time' => ['required'],
            'price_option' => ['required'],
            'time_option' => ['required'],
        
            
        ];
    }

    /**
     * @return array
     */
     public function messages()
    {
        return [
            
      
        ];
    } 
}
