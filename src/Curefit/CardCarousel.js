import React from 'react'
import './CardCarousel.css'

const CardCarousel = () => {
    return (
        <div>

            <div class="carousel-wrapper">
                <div class="carousel" data-flickity>
                    <div class="carousel-cell">
                        <h3>Product 1</h3>
                        <a class="more" href="">Explore more</a>
                        <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
                        <div class="line"></div>
                        <div class="price">
                            <span>225<sup>€</sup></span>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Product 2</h3>
                        <a class="more" href="">Explore more</a>
                        <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
                        <div class="line"></div>
                        <div class="price">
                            <span>225<sup>€</sup></span>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Product 3</h3>
                        <a class="more" href="">Explore more</a>
                        <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
                        <div class="line"></div>
                        <div class="price">
                            <span>225<sup>€</sup></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCarousel
