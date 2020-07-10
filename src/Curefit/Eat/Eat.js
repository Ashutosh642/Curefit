import React, { useContext } from 'react'
import EatCarousel from './EatCarousel'
import '../Eat/Eat.css'
import Drinks from './Drinks'
import IndianMeals from './IndianMeals'
import Snacks from './Snacks'
import Healbite from './Healbite'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { CureContext } from '../Context/CureContext'

const Eat = () => {
    const { state:
        {
            Eat
        }
    } = useContext(CureContext)
    return (
        <div style={{ marginTop: '8%' }}>
            <EatCarousel></EatCarousel>
            <br />
            <div>
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_1360:100,q_auto:best,f_auto/dpr_1/image/vm/8fa19322-db0c-4925-bbf8-9f1955e23c28.jpg" width='1349' />
            </div>
            <Router>
                <div class="shadow p-2 mb-4 bg-white rounded">
                    <div class=" row mt-5">
                        <div class="col-sm-2">  <Link to="/drinks">
                            <button type="button" class="btn btn-outline-secondary btn-lg rounded-pill">Drinks</button>
                        </Link></div>
                        <div class="col-sm-2"> <Link to="/snacks">
                            <button type="button" class="btn btn-outline-secondary btn-lg rounded-pill">Snacks</button>
                        </Link></div>
                        <div class="col-sm-2"> <Link to="/indianmeals">
                            <button type="button" class="btn btn-outline-secondary btn-lg rounded-pill">IndianMeals</button>
                        </Link></div>
                        <div class="col-sm-2"><Link to="/healbite">
                            <button type="button" class="btn btn-outline-secondary btn-lg rounded-pill">Healbite</button>
                        </Link></div>
                    </div>
                </div>
                <Route exact path="/drinks" component={Drinks}></Route>
                <Route exact path="/snacks" component={Snacks}></Route>
                <Route exact path="/indianmeals" component={IndianMeals}></Route>
                <Route exact path="/healbite" component={Healbite}></Route>
            </Router>
            
                <div>
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1920,ar_5.2,fl_progressive,f_auto,q_auto:eco/dpr_1/image/why-eat-fit.png" width='1349' />
                </div>
                <div class="typography-text col-xs-12" style={{ fontSize: '80px', color: ' rgb(110, 110, 110)' }}>EAT HEALTHY</div>
                <div class="typography-text col-xs-12" style={{ fontSize: '60px', color: 'rgb(178, 178, 178)' }}>STAY FIT</div>
           
        </div>



    )
}

export default Eat
