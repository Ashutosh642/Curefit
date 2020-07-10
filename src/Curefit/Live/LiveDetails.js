import React, { useContext } from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { CureContext } from '../Context/CureContext';

const LiveDetails = () => {
    const { state:
        {
            Live,Details
        }
    } = useContext(CureContext)
    return (
      
        <div style={{ marginTop: '8%' }}>
            { console.log(Details)}         
                <div class="row">
                    
                        <img class="col-xl-5 col-lg-5 col-md-7 col-sm-2 ml-2" src={Details.img} width='auto' height='400px' />
                    
                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10">
                        <div><span class="badge badge-secondary">LIVE|AT HOME|{Details.time}</span></div>
                        <div> <h3>{Details.title}</h3></div>
                        <div><p>{Details.timing}</p></div>
                        <div class="mt-5 mb-5">
                            <span>
                                <button type="button" class="btn btn-outline-secondary">11:30AM</button>&nbsp;
                                    <button type="button" class="btn btn-outline-secondary">12:30PM</button>&nbsp;
                                    <button type="button" class="btn btn-outline-secondary">1:30PM</button>&nbsp;
                                    <button type="button" class="btn btn-outline-secondary">2:30PM</button>&nbsp;
                                    <button type="button" class="btn btn-outline-secondary">3:30PM</button>&nbsp;
                                    <button type="button" class="btn btn-outline-secondary">4:30PM</button>&nbsp;
                                </span>
                        </div>


                        <div class=" mt-5 mb-3"><h5>About</h5></div>
                        <div><p>{Details.about}</p></div>

                        <div class="container jumbotron bg-dark py-5 mt-5" >
                            <div class="row">
                                <div class="col-sm-4">
                                    <ul style={{ listStyleType: "none" }}>
                                        <li class="text-white"><h4>cure.fit live</h4></li>
                                        <li class="text-success mt-3">MEMBERSHIP</li>
                                    </ul>
                                </div>
                                <div class="col-sm-5">
                                    <p class="text-secondary">STARTS AT 249/MONTH</p>
                                </div>
                                <div class="card-deck">
                                   
                                        <Link to="/membership">
                                            <button type="button" class="btn btn-outline-warning rounded-pill">BECOME A MEMBER</button>
                                        </Link>
                                       
                                    
                                </div>
                            </div>
                            <div class="row">

                                <div class="card-deck">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_524,ar_1.24,fl_progressive,f_auto,q_auto:eco/dpr_1/image/vm/2aaabb23-053a-4cb8-898a-0ee9c3980c33.png" width='150' height='130' />
                                </div>
                                <div class="card-deck">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_524,ar_1.24,fl_progressive,f_auto,q_auto:eco/dpr_1/image/vm/824536c3-46f4-49ce-8fff-55658d0615cc.png" width='150' height='130' />
                                </div>
                                <div class="card-deck">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_524,ar_1.24,fl_progressive,f_auto,q_auto:eco/dpr_1/image/vm/93157947-b9bd-41eb-8d8c-56b0146fc13f.png" width='150' height='130' />
                                </div>
                                
                            </div>
                        </div>
                        <div class="mt-5 mb-3">
                            <h5>Attendance for this class</h5>
                        </div>
                        <div>
                            <p>
                                Try completing the session to mark attendance for this class. Only attended classes are added to your weekly reports and levels.
                            </p>
                        </div>
                        <div class="mt-5 mb-3">
                            <h5>Benefits</h5>
                        </div>
                        <div class="row">
                            <div class="col">
                                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/image/livefit/app/fitness.png" />
                                Class led by star fitness trainers
                                </div>
                            <div class="col">
                                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/image/livefit/app/bolt.png" />
                                    Track your performance with Energy Meter
                                </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/image/livefit/app/group.png" />
                                Compete with friends in real-time
                                </div>
                            <div class="col">
                                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/image/livefit/app/metrics.png" />
                                Get a detailed report at the end of class
                                </div>
                        </div>
                        <div>
                            <h5 class="mt-5">HOW IT WORKS</h5>
                            <ul style={{ listStyleType: "none" }}>
                                <li class="text-dark">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_50,f_auto,ar_5:6,c_fit,q_auto:best,f_auto/dpr_1/image/icons/howItWorks/hitButton_1.png" />
                            Sign up for a Live at-home session
                            </li>
                                <li class="text-dark">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_50,f_auto,ar_5:6,c_fit,q_auto:best,f_auto/dpr_1/image/icons/howItWorks/cast.png" />
                            Pick a comfortable location at your home for the workout
                            </li>
                                <li class="text-dark">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_50,f_auto,ar_5:6,c_fit,q_auto:best,f_auto/dpr_1/image/icons/howItWorks/time.png" />
                            Open app/web and join the session at least 2 minutes prior to the start time
                            </li>
                                <li class="text-dark">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_50,f_auto,ar_5:6,c_fit,q_auto:best,f_auto/dpr_1/image/icons/howItWorks/info.png" />
                            Follow instructions to set up your mobile/laptop device
                            </li>
                                <li class="text-dark">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_50,f_auto,ar_5:6,c_fit,q_auto:best,f_auto/dpr_1/image/icons/howItWorks/happy@2x.png" />
                            Voila! Now enjoy the awesome LIVE experience
                            </li>
                            </ul>
                            <hr />
                        </div>

                    </div>
                </div>
           
        </div>
    )
}

export default LiveDetails
