<section class="product-detail">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="product-detail__info">
                    <div class="product-title">
                        <h2>Traveling To {{$ride->dropoff_location}} From {{$ride->pickup_location}}</h2>
                    </div>
                    <div class="product-address">
                        @if($ride->driver_id != null )

                        <span style="font-size: 1.8rem;"><b>Driver:</b> {{$ride->creator->name}} |
                            {{$ride->creator->phone_number}}</span>

                        @else
                        <span><b>Driver Needed</b>{{$ride->creator->name}} | {{$ride->creator->phone_number}}</span>
                        @endif
                    </div>
                    <div class="trips">
                        <div class="item">
                            <h6>Scheduled For </h6>
                            <p>
                                <i
                                    class="glyphicon glyphicon-calendar"></i>{{date("jS F, Y", strtotime(substr($ride->scheduled_date, 1, 10)))}}
                            </p>
                        </div>
                        <div class="item">
                            <h6>Ride Duration</h6>
                            <p><i class="fa fa-clock-o"></i>{{round($ride->total_distance, 1)}}KM /
                                {{round($ride->travel_time)}} Minutes</p>
                        </div>
                        <div class="item">
                            @if($ride->scheduled_time != null)
                            <h6>DepartureTime</h6>
                            <p>{{$ride->scheduled_time}}</p>
                            @else
                            <h6>DepartureTime</h6>
                            <p>Has Not Been Set</p>
                            @endif
                        </div>
                        <div class="item">
                            <h6>Available Seats</h6>
                            @if($ride->available_seats == 0 )
                            <p>Full</p>
                            @else
                            <p>{{$ride->available_seats}}</p>
                            @endif


                        </div>
                        <div class="item">
                            @if($ride->pickups_offerd == true)
                            <h6>Pickups Offerd</h6>
                            <p title="Yes">Pickups Are Offerd</p>
                            @elseif($ride->pickups_needed == true)
                            <h6>Pickup Needed</h6>
                            <p title="Yes">Pickup Needed</p>
                            @else
                            <h6>Pickup Information</h6>
                            <p>Pickups are not offerd</p>

                            @endif
                        </div>
                        <div class="item">
                            @if($ride->luggage_space_available != null)
                            <h6>Luggage Space</h6>
                            <p>Approx. Bag Space: {{$ride->luggage_space_available}} </p>
                            @elseif($ride->luggage_space_needed != null)
                            <h6>Luggage Space</h6>
                            <p>Approx. Bag Space Needed:{{$ride->luggage_space_needed }} </p>
                            @else
                            <h6>No Luggage Information</h6>
                            @endif
                        </div>
                    </div>



                    <table class="ticket-price">
                        <thead>
                            <tr>
                                <th class="ticket-price">
                                    <p>Ride Fare:</p>
                                </th>
                                <th class="adult"><span>Total Fare </span></th>
                                <th class="kid"><span>Split Fare by {{$ride->max_seats}}</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="ticket-price">
                                    <em>The Total Fare does not include individual Driver Fees</em>
                                </td>
                                <td class="adult">
                                    <ins>
                                        <span class="amount">{{$ride->asking_price}} GH₵</span>
                                    </ins>

                                </td>
                                <td class="kid">
                                    <ins>
                                        <span class="amount">{{$ride->fare_split}} GH₵</span>
                                    </ins>

                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <div class="col-md-6">
                <div class="product-detail__gallery">
                    <div class="product-slider-wrapper">
                        <div class="product-slider">

                            <div class="item">



                                @if($ride->driver_id != null )


                                <img src="{{$ride->driver->cars->first()->picture}}">




                                @endif





                            </div>
                            <div class="item">
                                <img src="{{$ride->creator->picture}}" alt="">

                            </div>

                        </div>
                        <div class="product-slider-thumb-row">
                            <div class="product-slider-thumb">

                                <div class="item">



                                    @if($ride->driver_id != null )


                                    <img src="{{$ride->driver->cars->first()->picture}}">





                                    @endif





                                </div>
                                <div class="item">
                                    <img src="{{$ride->creator->picture}}" alt="">

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                <div class="product-tabs tabs">
                    <ul>
                        <li>
                            <a href="#tabs-1">Ride Information</a>
                        </li>
                        <li>
                            <a href="#tabs-2">Extra Details</a>
                        </li>
                        <li>
                            <a href="#tabs-3">Reviews & Misc.</a>
                        </li>
                        <li>
                            <a href="#tabs-4">Rider Information</a>
                        </li>
                    </ul>
                    <div class="product-tabs__content">
                        <div id="tabs-1">
                            <div class="trip-schedule-accordion accordion">
                                <h3>Ride</h3>
                                <div>
                                    <div class="tour-map-wrapper">
                                        <div class="tour-map">
                                            {{-- <div data-latlong="21.036697, 105.834871"></div> --}}
                                            @include('frontend.partials.singleRide.map')
                                        </div>

                                        <div class="trips">
                                            <div class="item">
                                                <h6>Pickup Stops</h6>
                                                <p><i class="awe-icon awe-icon-attraction"></i>{{count($ride->pickups)}}
                                                </p>
                                            </div>
                                            <div class="item">
                                                <h6>Time length</h6>
                                                <p><i class="fa fa-clock-o"></i>{{round($ride->total_distance, 1)}}KM,
                                                    {{round($ride->travel_time)}} Minutes</p>
                                            </div>
                                        </div>
                                        <br>
                                        <h6>Departure time</h6>
                                        <p>Departs:{{date("jS F, Y", strtotime(substr($ride->scheduled_date, 1, 10)))}}

                                            <b> At</b>

                                            {{$ride->scheduled_time}} </p>
                                        @if($ride->ride_notes == null)
                                        <p>The Creator of this ride has not added any extra information or notes. Please
                                            contact them directly for more information about this ride.</p>
                                        @else
                                        <p>{{$ride->ride_notes}}</p>
                                        @endif


                                    </div>
                                    <br>

                                </div>



                            </div>
                        </div>

                        <div id="tabs-2">
                            <table class="good-to-know-table">
                                <tbody>
                                    <tr>
                                        <th>
                                            <p> Driver</p>
                                        </th>
                                        <td>
                                            <p>{{$ride->driver->name}}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Scheduled For </p>
                                        </th>
                                        <td>
                                            <p>
                                                {{date("jS F, Y", strtotime(substr($ride->scheduled_date, 1, 10)))}}

                                                <b> At</b>

                                                {{$ride->scheduled_time}}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Pickup Fees</p>
                                        </th>
                                        <td>
                                            <p>{{$ride->pickup_fee}}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Seating</p>
                                        </th>
                                        <td>
                                            @if($ride->seats_needed != null)
                                            <p>This Rider needs <b> {{$ride->seats_needed}} </b>
                                                @if($ride->child_seats != null)

                                                {{$ride->child_seats}} of which are for children.
                                                @endif
                                            </p>
                                            @endif
                                            @if($ride->max_seats != null)
                                            <p>There are a Maximum of <b> {{$ride->max_seats}} Seats Available For This
                                                    Ride</b></p>
                                            @endif
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Amenities</p>
                                        </th>
                                        <td>
                                            @if($ride->amenities)

                                            @foreach($ride->amenities as $amenity)

                                            <p>{{$amenity->name}} </p>
                                            @endforeach
                                            @else
                                            <p>No Amenity Information has been added for this ride.</p>

                                            @endif

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Luggage Space</p>
                                        </th>
                                        <td>
                                            @if($ride->luggage_space_available != null)


                                            <p>Maximum Amount of Luggage Space Available:
                                                {{$ride->luggage_space_available}}</p>

                                            @elseif($ride->luggage_space_needed != null)
                                            <p>Approximate Amount of Luggage Space Needed:
                                                {{$ride->luggage_space_needed}}</p>
                                            @endif

                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div id="tabs-3">
                            <div id="reviews">
                                <div class="rating-info">
                                    <div class="average-rating-review good">
                                        <span class="count">{{$ride->rating}}</span>
                                        <em>Average rating</em>

                                    </div>
                                    <ul class="rating-review">
                                        <li>
                                            <em>Safety</em>
                                            <span>7.5</span>
                                        </li>
                                        <li>
                                            <em>Service</em>
                                            <span>9.0</span>
                                        </li>
                                        <li>
                                            <em>Friendliness</em>
                                            <span>9.5</span>
                                        </li>
                                        <li>
                                            <em>Charisma</em>
                                            <span>8.7</span>
                                        </li>
                                    </ul>
                                    <a href="#" class="write-review">Write a review</a>
                                </div>
                                <div id="add_review">
                                    <h3 class="comment-reply-title">Add a review</h3>
                                    <form>
                                        <div class="comment-form-author">
                                            <label for="author">Name <span class="required">*</span></label>
                                            <input id="author" type="text">
                                        </div>
                                        <div class="comment-form-email">
                                            <label for="email">Email <span class="required">*</span></label>
                                            <input id="email" type="text">
                                        </div>
                                        <div class="comment-form-rating">
                                            <h4>Your Rating</h4>
                                            <div class="comment-form-rating__content">
                                                <div class="item safety">
                                                    <label>Safety</label>
                                                    <select class="awe-select">
                                                        <option>5.0</option>
                                                        <option>6.5</option>
                                                        <option>7.5</option>
                                                        <option>8.5</option>
                                                        <option>9.0</option>
                                                        <option>10</option>
                                                    </select>
                                                </div>
                                                <div class="item service">
                                                    <label>Service</label>
                                                    <select class="awe-select">
                                                        <option>5.0</option>
                                                        <option>6.5</option>
                                                        <option>7.5</option>
                                                        <option>8.5</option>
                                                        <option>9.0</option>
                                                        <option>10</option>
                                                    </select>
                                                </div>
                                                <div class="item friendliness">
                                                    <label>Friendliness</label>
                                                    <select class="awe-select">
                                                        <option>5.0</option>
                                                        <option>6.5</option>
                                                        <option>7.5</option>
                                                        <option>8.5</option>
                                                        <option>9.0</option>
                                                        <option>10</option>
                                                    </select>
                                                </div>
                                                <div class="item charisma">
                                                    <label>Charisma</label>
                                                    <select class="awe-select">
                                                        <option>5.0</option>
                                                        <option>6.5</option>
                                                        <option>7.5</option>
                                                        <option>8.5</option>
                                                        <option>9.0</option>
                                                        <option>10</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment-form-comment">
                                            <label for="comment">Your Review</label>
                                            <textarea id="comment"></textarea>
                                        </div>
                                        <div class="form-submit">
                                            <input type="submit" class="submit" value="Submit">
                                        </div>
                                    </form>
                                </div>
                                <div id="comments">
                                    <ol class="commentlist">
                                        <li>
                                            <div class="comment-box">
                                                <div class="avatar">
                                                    <img src="images/img/demo-thumb.jpg" alt="">
                                                </div>
                                                <div class="comment-body">
                                                    <p class="meta">
                                                        <strong>Nguyen Gallahendahry</strong>
                                                        <span class="time">December 10, 2012</span>
                                                    </p>
                                                    <div class="description">
                                                        <p>Takes me back to my youth. I love the design of this soda
                                                            machine. A bit pricy though..!</p>
                                                    </div>

                                                    <div class="rating-info">
                                                        <div class="average-rating-review good">
                                                            <span class="count">7.5</span>
                                                            <em>Average rating</em>
                                                            <span>Good</span>
                                                        </div>
                                                        <ul class="rating-review">
                                                            <li>
                                                                <em>Facility</em>
                                                                <span>7.5</span>
                                                            </li>
                                                            <li>
                                                                <em>Human</em>
                                                                <span>9.0</span>
                                                            </li>
                                                            <li>
                                                                <em>Service</em>
                                                                <span>9.5</span>
                                                            </li>
                                                            <li>
                                                                <em>Interesting</em>
                                                                <span>8.7</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="comment-box">
                                                <div class="avatar">
                                                    <img src="images/img/demo-thumb.jpg" alt="">
                                                </div>
                                                <div class="comment-body">
                                                    <p class="meta">
                                                        <strong>James Bond not 007</strong>
                                                        <span class="time">December 10, 2012</span>
                                                    </p>
                                                    <div class="description">
                                                        <p>Takes me back to my youth. I love the design of this soda
                                                            machine. A bit pricy though..!</p>
                                                    </div>

                                                    <div class="rating-info">
                                                        <div class="average-rating-review good">
                                                            <span class="count">7.5</span>
                                                            <em>Average rating</em>
                                                            <span>Good</span>
                                                        </div>
                                                        <ul class="rating-review">
                                                            <li>
                                                                <em>Facility</em>
                                                                <span>7.5</span>
                                                            </li>
                                                            <li>
                                                                <em>Human</em>
                                                                <span>9.0</span>
                                                            </li>
                                                            <li>
                                                                <em>Service</em>
                                                                <span>9.5</span>
                                                            </li>
                                                            <li>
                                                                <em>Interesting</em>
                                                                <span>8.7</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="comment-box">
                                                <div class="avatar">
                                                    <img src="images/img/demo-thumb.jpg" alt="">
                                                </div>
                                                <div class="comment-body">
                                                    <p class="meta">
                                                        <strong>Bratt not Pitt</strong>
                                                        <span class="time">December 10, 2012</span>
                                                    </p>
                                                    <div class="description">
                                                        <p>Takes me back to my youth. I love the design of this soda
                                                            machine. A bit pricy though..!</p>
                                                    </div>

                                                    <div class="rating-info">
                                                        <div class="average-rating-review fine">
                                                            <span class="count">5.0</span>
                                                            <em>Average rating</em>
                                                            <span>Fine</span>
                                                        </div>
                                                        <ul class="rating-review">
                                                            <li>
                                                                <em>Facility</em>
                                                                <span>7.5</span>
                                                            </li>
                                                            <li>
                                                                <em>Human</em>
                                                                <span>9.0</span>
                                                            </li>
                                                            <li>
                                                                <em>Service</em>
                                                                <span>9.5</span>
                                                            </li>
                                                            <li>
                                                                <em>Interesting</em>
                                                                <span>8.7</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>


                        <div id="tabs-4">
                            <table class="confirmation-information good-to-know-table">
                                <tbody>
                                    <tr>
                                        <th>
                                            <p> Passengers</p>
                                        </th>

                                        <td>
                                            @forelse($ride->passengers as $passenger)
                                            <p>{{$passenger->passenger_name}}</p>
                                            <p>
                                                Joined On: {{ timezone()->convertToLocal($passenger->created_at, 'F jS, Y') }}
                                            </p>
                                            @empty
                                            <p>There are No Passengers on this ride</p>
                                            @endforelse
                                        </td>



                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Scheduled For </p>
                                        </th>
                                        <td>
                                            <p>
                                                {{date("jS F, Y", strtotime(substr($ride->scheduled_date, 1, 10)))}}

                                                <b> At</b>

                                                {{$ride->scheduled_time}}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Pickup Fees</p>
                                        </th>
                                        <td>
                                            <p>{{$ride->pickup_fee}}</p>

                                            @forelse($ride->passengers as $passenger)
                                            @if(
                                            $ride->pickups->where('passenger','=',$passenger->user_id)->first()->pickup_location
                                            != null)
                                            <p>{{$passenger->passenger_name}} needs to be picked up at
                                                {{$ride->pickups->where('passenger','=',$passenger->user_id)->first()->pickup_location}}
                                            </p>
                                            @else
                                            <p>will be meet at the designated location.
                                            </p>
                                            @endif
                                            @empty
                                            <p>No passenger Pickup Information</p>
                                            @endforelse
                                        </td>



                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Seating</p>
                                        </th>
                                        
                                        <td>
@forelse($ride->passengers as $passenger)
                                            <p>{{$passenger->passenger_name}} needs
                                                {{$ride->pickups->where('passenger','=',$passenger->user_id)->first()->seats_needed}}
                                                seat(s)</p>

                                            @empty


                                            <p>No passenger Seating Information</p>
                                            @endforelse
                                        </td>



                                    </tr>
                                    <tr>
                                        <th>
                                            <p>Luggages</p>
                                        </th>
                                        
                                        <td>
@forelse($ride->passengers as $passenger)
                                            <p>{{$passenger->passenger_name}} Has 
                                                {{$ride->pickups->where('passenger','=',$passenger->user_id)->first()->luggage_space_needed}}
                                                Bag(s)</p>

                                            @empty
                                            <p>No passenger Luggage Information</p>
                                            @endforelse
                                        </td>



                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="detail-sidebar">
                    <div class="call-to-book">
                        <i class="awe-icon awe-icon-phone"></i>
                        <em>For More Information Call the Driver</em>
                        <span>{{$ride->driver->phone_number}}</span>
                    </div>
                    <div class="booking-info">
                        @if($ride->available_seats == 0)
                        <h3>This Ride is Full and not accepting any more passengers</h3>
                        @else
                        <h3>Booking info</h3>
                        <div class="form-group">
                            <div class="form-elements form-adult">
                                <label>Seats</label>
                                <div class="form-item">

                                    <select class="awe-select seats-needed-selector">

                                        @for ($i = 1 ; $i <= $ride->available_seats; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                            @endfor

                                    </select>
                                </div>
                            </div>
                            <div class="form-elements form-kids">
                                <label>Luggages</label>
                                <div class="form-item">
                                    <select class="awe-select luggage-space-selector">
                                        @for ($i = 1 ; $i <= $ride->luggage_space_available; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                            @endfor
                                    </select>
                                </div>
                                <span>23 Kg or Less</span>
                            </div>
                        </div>
                        <div class="form-select-date">
                            <div class="form-elements">
                                <label>Need To Be Picked Up?</label>
                                <div class="form-item">
                                    <i class="fa fa-car"></i>
                                    <input type="text" placeholder="Pickup Location" id="pickup_location_input">
                                </div>
                                <span>Leave Blank if you will be at the designated pickup location</span>
                                <span>* Individual Pickup Fees maybe be added based on the Driver</span>
                            </div>
                        </div>
                        <div class="price">
                            <em>Your Total</em>
                            <span class="ride-price-amount-text">{{$ride->fare_split}} <sub>+
                                    {{$ride->pickupPrice ?? 0.00}} For Pickup</sub></span>
                        </div>
                        <div class="form-submit">
                            <div class="add-to-cart">
                                <button type="submit" class="submit-join-ride-button">
                                    <i class="awe-icon awe-icon-cart"></i>Join This Ride
                                </button>
                            </div>
                        </div>
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>