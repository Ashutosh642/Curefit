import React from 'react'

const EatCarousel = () => {
    return (
        <div>
             <div id="carouselExampleIndicators" class="carousel slide col-sm-10 m-auto border p-1" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:best,f_auto/dpr_1/image/vm/2a35923b-9f91-4949-a40b-7210b762a05c.jpg" height="320px"class="d-block w-100"  alt="...1" />
                        <div class="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:best,f_auto/dpr_1/image/vm/dfca4c08-e993-4c56-8493-09f8ba700871.jpg" height="320px" class="d-block w-100" alt="...2" />
                        <div class="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:best,f_auto/dpr_1/image/vm/5bcf0313-33c0-4113-95f3-d2067c7c1813.png" height="320px" class="d-block w-100" alt="...3" />
                        <div class="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>  



          
        </div>
    )
}

export default EatCarousel
