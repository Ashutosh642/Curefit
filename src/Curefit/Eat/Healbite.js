import React, { useContext } from 'react'
import { CureContext } from '../Context/CureContext'


const Healbite = () => {
    const { state: { Eat },addToCart } = useContext(CureContext)
    return (
        <div>
            <div class="mt-5 container">
                {Eat.map(({ healBite }) => (
                    <div class="row mb-5 ">
                        {healBite.map((data) => (
                            <div class="col-lg-4 col-md-6 col-sm-12 mb-5 hvr-box-shadow-outset">
                                <div class="card mb-3 border-0" style={{ height: '25rem' }}>
                                    <img class="card-img-top zoom" src={data.img} height='230' width='60' />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.item}</h5>
                                        <div class="row">
                                            <div class="col-sm-1"><img src={data.type} /></div>
                                            <div class="col"><p class="text-secondary">{data.about}</p></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3"><h5>₹{data.offerprice}</h5></div>
                                            <div class="col"><strike>₹{data.actualprice}</strike></div>
                                            <div class="col">
                                                <button type="button" class="btn btn-outline-success rounded-pill" onClick={(e)=>addToCart(data)}>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Healbite
