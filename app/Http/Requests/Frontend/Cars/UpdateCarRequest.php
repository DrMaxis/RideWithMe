<?php
namespace App\Http\Requests\Frontend\Cars;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateCarRequest.
 */
class UpdateCarRequest extends FormRequest
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
            'image_type' => ['required', 'max:3000'],
            'image_location' => ['sometimes', 'image', 'max:3000'],
            'car_model' => ['required', 'max:50'],
            'car_year' => ['required', 'max:10'],
            'car_color' => ['required', 'max:30'],
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








