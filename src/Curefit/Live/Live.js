import React, { useContext } from 'react'
import './Live.css'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { CureContext } from '../Context/CureContext';
const Live = () => {
    const { state:
        {
            Live
        }, viewDetails
    } = useContext(CureContext)

    return (
        <div style={{ marginTop: '8%' }}>
            <div class="container jumbotron bg-dark py-5 mt-5" >

                <div class="row container">
                    <div class="card-deck ">
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_524,ar_1.24,fl_progressive,f_auto,q_auto:eco/dpr_1/image/vm/2aaabb23-053a-4cb8-898a-0ee9c3980c33.png" width='250' height='230' />
                    </div>
                    <div class="card-deck ">
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_524,ar_1.24,fl_progressive,f_auto,q_auto:eco/dpr_1/image/vm/824536c3-46f4-49ce-8fff-55658d0615cc.png" width='250' height='230' />
                    </div>
                    <div class="card-deck ">
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_524,ar_1.24,fl_progressive,f_auto,q_auto:eco/dpr_1/image/vm/93157947-b9bd-41eb-8d8c-56b0146fc13f.png" width='250' height='230' />
                    </div>
                    <div class="card-deck  mt-3">
                        <ul style={{ listStyleType: "none" }}>
                            <li class="text-white"><h2>cure.fit live</h2></li>
                            <li class="text-success mt-3">MEMBERSHIP</li>
                            <li class="text-white mt-3">

                                <Link to="/membership">
                                    <button type="button" class="btn btn-outline-warning rounded-pill  ">BECOME A MEMBER</button>
                                </Link>

                            </li>
                            <li class="text-white mt-3">STARTS AT 249/MONTH</li>
                        </ul>
                    </div>

                </div>
            </div>

             <div class="container">
                <h2>Live & Upcoming classes</h2>
                <div class="row">
                    {Live.map((item) => (
                        <div class=" col-lg-4 col-md-6 col-sm-12 shadow-lg  mb-5 bg-info rounded-pill  hvr-float-shadow ">
                            <div >
                            <Link to="/liveDetails" style={{textDecoration: 'none'}}><div class="card mb-3 border-0" onClick={(e)=>viewDetails(item)} >
                                <img class="card-img-top" src={item.img} alt="Card image cap"  />
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <h5 class="card-title">{item.title}</h5>
                                            <h6 class="text-secondary">{item.mentor}&nbsp;|&nbsp;{item.type}</h6>
                                        </div>
                                        <div class="col">
                                            <h5 class="card-title text-info">{item.time}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col ml-5">
                                        <button type="button" class="btn btn-outline-secondary">11:30AM</button>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="btn btn-outline-secondary">12:30PM</button>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="btn btn-outline-secondary" >More</button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>  

            <div class="container">
            <div class="typography-text col-xs-12" style={{fontSize: '100px',color: 'rgb(110, 110, 110)'}}>BE BETTER</div>
            <div class="typography-text col-xs-12" style={{fontSize: '80px',color: 'rgb(178, 178, 178)'}}>EVERYDAY</div>
            </div>
        </div>
    )
}

export default Live
// 
