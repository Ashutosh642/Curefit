import React, { useContext } from 'react'
import GearCarousel from './GearCarousel'
import { CureContext } from '../Context/CureContext'


const Gear = () => {
    const { state:
        {
            Gear
        }, addToCart
    } = useContext(CureContext)
    return (
        <div style={{ marginTop: '8%' }}>
            <GearCarousel />
            <div class="mt-5 container">
                <h4>60% off store</h4>
                <p class="text-secondary">Everything at 60% off</p>
                {Gear.map(({ offOne }) => (
                    <div class="row mb-5 ">
                        {offOne.map((data) => (
                            
                                <div class="card-deck">
                                <div class="card border-0 " style={{ width: '14.5rem' }}>
                                    <img src={data.img} height='308' width='231' />
                                    <div class="card-body">
                                        <div><h6>CULTSPORT</h6></div>
                                        <div><p class="text-secondary">{data.item}</p></div>
                                        <div><h6>₹{data.offerprice}&nbsp;<span><strike class="text-secondary">₹{data.actualprice}</strike></span>&nbsp;<span class="text-danger">{data.off}</span></h6></div>
                                        <div><button type="button" class="btn btn-outline-success rounded-pill" onClick={(e) => addToCart(data)}>ADD</button></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div class="mt-5 container">
                <h4>50% off store</h4>
                <p class="text-secondary">Everything at 50% off</p>
                {Gear.map(({ offTwo }) => (
                    <div class="row mb-5 ">
                        {offTwo.map((data) => (
                            <div class="card-deck">
                                <div class="card border-0" style={{ width: '14.5rem' }}>
                                    <img src={data.img} height='308' width='231' />
                                    <div class="card-body">
                                        <div><h6>CULTSPORT</h6></div>
                                        <div><p class="text-secondary">{data.item}</p></div>
                                        <div><h6>₹{data.offerprice}&nbsp;<span><strike class="text-secondary">₹{data.actualprice}</strike></span>&nbsp;<span class="text-danger">{data.off}</span></h6></div>
                                        <div><button type="button" class="btn btn-outline-success rounded-pill" onClick={(e) => addToCart(data)}>ADD</button></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div class="mt-5 container">
                <h4>40% off store</h4>
                <p class="text-secondary">Everything at 40% off</p>
                {Gear.map(({ offThree }) => (
                    <div class="row mb-5 ">
                        {offThree.map((data) => (
                           <div class="card-deck">
                                <div class="card border-0 " style={{ width: '14.5rem' }}>
                                    <img src={data.img} height='308' width='231' />
                                    <div class="card-body">
                                        <div><h6>CULTSPORT</h6></div>
                                        <div><p class="text-secondary">{data.item}</p></div>
                                        <div><h6>₹{data.offerprice}&nbsp;<span><strike class="text-secondary">₹{data.actualprice}</strike></span>&nbsp;<span class="text-danger">{data.off}</span></h6></div>
                                        <div><button type="button" class="btn btn-outline-success rounded-pill" onClick={(e) => addToCart(data)}>ADD</button></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div class="container">
                <div class="typography-text col-xs-12" style={{ fontSize: '80px', color: 'rgb(110, 110, 110)' }}>PERFORMANCE SPORTSWEAR</div>
                <div class="typography-text col-xs-12" style={{ fontSize: '30px', color: 'rgb(178, 178, 178)' }}>FOR THE EVERYDAY ATHLETE</div>
            </div>
        </div>
    )
}

export default Gear
{/* <div class="col-sm-3 mb-5"> */}