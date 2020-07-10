import React,{useContext} from 'react'
import CartEmpty from './CartEmpty'
import ItemCard from './ItemCard'
import PriceCard from './PriceCard'
import { CureContext } from '../Context/CureContext'
const Cart = () => {
    const {
        state:
        {
            Cart,Eat
        }
    } = useContext(CureContext)
    return (
        <div style={{ marginTop: '8%' }}>
             {!Cart.length ? (<CartEmpty/>) :(
                  <div className="row container">
                  <div class="col-lg-8 col-md-6 col-sm-12">
                      <div><h4 class="ml-">Order Summary</h4></div>
                      <ItemCard/>
                  </div>
                   <div class="col-lg-4 col-md-6 col-sm-12">
                      <PriceCard></PriceCard>
                  </div> 
              </div>
             )}
                   
              
        </div>
    )
}

export default Cart
