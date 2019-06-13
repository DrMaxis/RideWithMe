<?php

namespace App\Repositories\Frontend\Car;


use Carbon\Carbon;
use App\Models\Auth\Cars\Car;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;



/**
 * Class CarRepository.
 */
class CarRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Car::class;
    }


    /**
     * @param $uuid
     *
     * @throws GeneralException
     * @return mixed
     */
    public function findByUuid($uuid)
    {
        $car = $this->model
            ->uuid($uuid)
            ->first();

        if ($car instanceof $this->model) {
            return $car;
        }

        throw new GeneralException('Car not found');
    }



    /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return \Illuminate\Database\Eloquent\Model|mixed
     */
    public function create(array $data)
    {


        return DB::transaction(function () use ($data) {
            $user = auth()->user();
                    $car = parent::create([
                    'user_id' => $user->id,
                    'model' => $data['car_model'],
                    'year' => $data['car_year'],
                    'plate_number' => $data['plate_number'],
                    'color' => $data['car_color'],
                ]);
            
            return $car;
        });
    }




}
