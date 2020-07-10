import React, { useContext } from 'react'

import PaymentModal from './PaymentModal'
import { CureContext } from './Context/CureContext'

const Membership = () => {
    const { state:
        {
            Membership,Amount
        },payment
    } = useContext(CureContext)
    return (
        <div style={{ marginTop: '8%' }}>
            <div class="row container">

                
                    <img class="col-xl-5 col-lg-5 col-md-7 col-sm-2 ml-2" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_540,f_auto,ar_1.6,c_fit,q_auto:best,f_auto/dpr_1//image/vm/d38d2ed0-de0a-460a-8928-80c06992f241.jpg" width='auto' height='400px' />
               

                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10">
                    <div class="mb-4"><h3>cure.fit live  Membership</h3></div>
                    <div class="mb-4"><h4>Choose subscription plan</h4></div>
                    {Membership.map(({ period, amountPerMonth, totalActualAmount, totalOfferAmount,isChecked }) => (
                        <div class="shadow p-3 mb-5 bg-white rounded">
                            <div class="row">
                                <div class="col-sm-2">
                                    <input type="radio"  name="radio" value={ totalOfferAmount} onChange={(e)=>payment(e)}/>
                                </div>
                                <div class="col">
                                    <h3>{period}</h3>
                                    <h5 class="text-success">{amountPerMonth}</h5>
                                </div>
                                <div class="col">
                                    <h5><span class="text-secondary"><strike>{totalActualAmount}</strike></span>&nbsp;&nbsp;{totalOfferAmount}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div>
                        <button type="button" class="btn btn-lg btn-danger rounded-pill float-right" data-toggle="modal" data-target="#exampleModalScrollable">
                            PAY&nbsp; {Amount}
                        </button>
                        <PaymentModal />
                    </div>
                    <br /><br />
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_964,f_auto,h_90,c_fit,q_auto:best,f_auto/dpr_1/image/livefit/app/trial_pack_banner_web_change_1.png" />
                    </div>
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_375,f_auto,h_768,c_fit,q_auto:best,f_auto/dpr_1//image/livefit/app/web_benefits_live_pack.png" />
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
                        <div class="mt-4"><h5>Terms & condition</h5></div>
                        <div class="mt-4"><p>Subscription is charged through your account at confirmation of purchase and gives you access to all Live and On-Demand Content on Cure.fit.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membership
// checked={isChecked?"checked":""}
