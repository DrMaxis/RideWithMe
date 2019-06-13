

<section class="filter-page">
    <div class="container">
        <div class="row">

                @include('frontend.partials.rides.sidebar')
            <div class="col-md-9">
                <div class="filter-page__content">
                    <div class="filter-item-wrapper">

                        <!-- ITEM -->
                        <div class="trip-item">
                         
                            <div class="item-body">
                                <div class="item-title">
                                    <h2>
                                        <a href="#">{{$ride->pickup_location}} to {{$ride->dropoff_location}}</a>
                                    </h2>
                                </div>
                                <div class="item-list">
                                    <ul>
                                        <li></li>
                                        <li>2 days, 1 night</li>
                                    </ul>
                                </div>
                                <div class="item-footer">
                                    <div class="item-rate">
                                        <span>7.5 Good</span>
                                    </div>
                                    <div class="item-icon">
                                        <i class="awe-icon awe-icon-gym"></i>
                                        <i class="awe-icon awe-icon-car"></i>
                                        <i class="awe-icon awe-icon-food"></i>
                                        <i class="awe-icon awe-icon-level"></i>
                                        <i class="awe-icon awe-icon-wifi"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="item-price-more">
                                <div class="price">
                                    Adult ticket
                                    <ins>
                                        <span class="amount">$200</span>
                                    </ins>
                                    <del>
                                        <span class="amount">$200</span>
                                    </del>

                                </div>
                                <a href="#" class="awe-btn">Book now</a>
                            </div>
                        </div>
                 
                    </div>


                    <!-- PAGINATION -->
                    <div class="page__pagination">
                        <span class="pagination-prev"><i class="fa fa-caret-left"></i></span>
                        <span class="current">1</span>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#" class="pagination-next"><i class="fa fa-caret-right"></i></a>
                    </div>
                    <!-- END / PAGINATION -->
                </div>
            </div>

        </div>
    </div>
</section>