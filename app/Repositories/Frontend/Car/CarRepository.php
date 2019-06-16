<?php

namespace App\Repositories\Frontend\Car;


use Carbon\Carbon;
use App\Models\Auth\Cars\Car;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use Illuminate\Support\Facades\Storage;



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



        /**
     * @param       $id
     * @param array $input
     * @param bool|UploadedFile  $image
     *
     * @throws GeneralException
     * @return array|bool
     */
    public function update($id, array $input, $image = false)
    {
        $now = Carbon::now()->toDateTimeString();
        $car = $this->getById($id);
        $car->model = $input['car_model'];
        $car->year = $input['car_year'];
        $car->color = $input['car_color'];
        // Upload profile image if necessary
        if ($image) {
            $car->image = $image->store('/carimages', 'car_images');
        } else {
            // No image being passed
            if ($input['image_type'] === 'storage') {
                // If there is no existing image
                if ($car->image === '') {
                    throw new GeneralException('You must supply an image for your car.');
                }
            } else {
                // If there is a current image, and they are not using it anymore, get rid of it
                if ($car->image !== '') {
                    Storage::disk('car_images')->delete($car->image);
                }

                $car->image = null;
            }
        }

       

        return $car->save();
    }




}
