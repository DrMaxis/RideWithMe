<?php

namespace App\Http\Controllers\Frontend\User;

use App\Models\Auth\Cars\Car;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;
use App\Events\Frontend\Auth\Rides\CarCreated;
use App\Events\Frontend\Auth\Rides\CarDeleted;
use App\Repositories\Frontend\Car\CarRepository;
use App\Http\Requests\Frontend\Cars\SaveCarRequest;

/**
 * Class CarController.
 */
class CarController extends Controller
{




    /**
     * @var carRepository
     */
    protected $carRepository;

    /**
     * CarController constructor.
     *
     * @param CarRepository $carRepository
     */
    public function __construct(CarRepository $carRepository)
    {
        $this->carRepository = $carRepository;
    }


    public function showCars() {
        $user = auth()->user();

        $cars = $user->cars;

        return view('frontend.user.account.cars')->with('cars', $cars);
    }


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function save(SaveCarRequest $request)
    {


    $user = auth()->user();
    $data = $request->only('car_model', 'car_year', 'plate_number', 'car_color');
    $car = $this->carRepository->create($data);

    if($car) {

        event(new CarCreated($car, $user));
        return redirect()->back()->withFlashSuccess(__($car->year.' '.$car->model.' Added To Your Account Successfully'));
    } else {
        throw new GeneralException('An Error Occured When Saving Your Car');
    }

    }




     /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function delete(Car $car)
    {
        if ($car->delete()) {
            event(new CarDeleted($car, auth()->user()));

            return redirect()->back()->withFlashSuccess(__('Car Deleted'));
        }

        throw new GeneralException(__('exceptions.backend.access.users.social_delete_error'));

    }
}
