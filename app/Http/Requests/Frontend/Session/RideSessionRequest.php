<?php

namespace App\Http\Requests\Frontend\Session;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class RideSessionRequest.
 */
class RideSessionRequest extends FormRequest
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
            'passenger_name' => ['required'],
            'phone_number' => ['required'],
            'pickup_location' => ['required', 'string'],
            'dropoff_location' => ['required', 'string'],
            'request_date' => ['sometimes']
        ];
    }

    /**
     * @return array
     */
    /* public function messages()
    {
        return [
            'g-recaptcha-response.required_if' => __('validation.required', ['attribute' => 'captcha']),
        ];
    } */
}
