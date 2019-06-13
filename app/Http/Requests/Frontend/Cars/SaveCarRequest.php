<?php
namespace App\Http\Requests\Frontend\Cars;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class SaveCarRequest.
 */
class SaveCarRequest extends FormRequest
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
            'car_model' => ['required', 'max:50'],
            'car_year' => ['required', 'max:10'],
            'plate_number' => ['required', 'unique:cars'],
            'car_color' => ['required', 'max:30',],
        ];
    }

    /**
     * @return array
     */
     public function messages()
    {
        return [
            'plate_number.unique' => 'There is Already a Car Listed with this Plate Number',
            
        ];
    } 
}








