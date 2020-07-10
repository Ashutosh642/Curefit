import React, { useContext } from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Cart from './Cart/Cart';
import { CureContext } from './Context/CureContext';

function Header() {
    const { state: { Cart } } = useContext(CureContext)
    return (
        <div>
            {/* <div class="shadow  mb-5 bg-white rounded fixed-top">
                <nav class="navbar navbar-expand-lg navbar-light row">
                    <div className="col"><Link to="/">
                        <img src="https://media.glassdoor.com/sqll/1675320/cure-fit-squarelogo-1558695311551.png" height="60" width="60" />
                        </Link>
                    </div>


                    <div class="col">
                        <Link to="/live" class="text-dark" style={{textDecoration: 'none'}}><img src="https://static.cure.fit/assets/images/Livefit.svg" height="30" width="30" /><br />LIVE</Link>
                        </div>
                    <div class="col">
                    <Link to="/eat" class="text-dark" style={{textDecoration: 'none'}}><img src="https://static.cure.fit/assets/images/eat-icon.svg" height="30" width="30" /><br />EAT</Link>
                        </div>
                    <div class="col">
                        <Link to="/mind" class="text-dark" style={{textDecoration: 'none'}}><img src="https://static.cure.fit/assets/images/mind-icon.svg" height="30" width="30" /><br />MIND</Link>
                        </div>
                    <div class="col">
                        <Link to="/gear" class="text-dark" style={{textDecoration: 'none'}}><img src="https://static.cure.fit/assets/images/gearfit-icon.svg" height="30" width="30" /><br />GEAR</Link>
                        </div>
                    <div class="col">
                    <span class="badge badge-pill badge-danger">{Cart.length}</span><Link to="/cart" ><img src="https://static.cure.fit/assets/images/cart-image.svg" height="50" width="50" /></Link>
                    </div>

                </nav>
            </div> */}
            <nav class="navbar navbar-expand-lg navbar-light rounded shadow bg-white mb-5 fixed-top">
                <Link to="/">
                    <img src="https://media.glassdoor.com/sqll/1675320/cure-fit-squarelogo-1558695311551.png" height="60" width="60" />
                </Link>
                <button class="navbar-toggler btn-danger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <div class="col ml-5">
                        <Link to="/live" class="text-dark" style={{ textDecoration: 'none' }}><img src="https://static.cure.fit/assets/images/Livefit.svg" height="30" width="30" /><br />LIVE</Link>
                    </div>
                    <div class="col ml-5">
                        <Link to="/eat" class="text-dark" style={{ textDecoration: 'none' }}><img src="https://static.cure.fit/assets/images/eat-icon.svg" height="30" width="30" /><br />EAT</Link>
                    </div>
                    <div class="col ml-5">
                        <Link to="/mind" class="text-dark" style={{ textDecoration: 'none' }}><img src="https://static.cure.fit/assets/images/mind-icon.svg" height="30" width="30" /><br />MIND</Link>
                    </div>
                    <div class="col ml-5">
                        <Link to="/gear" class="text-dark" style={{ textDecoration: 'none' }}><img src="https://static.cure.fit/assets/images/gearfit-icon.svg" height="30" width="30" /><br />GEAR</Link>
                    </div>
                    <div class="col ml-5">
                        <span class="badge badge-pill badge-danger">{Cart.length}</span><Link to="/cart" ><img src="https://static.cure.fit/assets/images/cart-image.svg" height="50" width="50" /></Link>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header
