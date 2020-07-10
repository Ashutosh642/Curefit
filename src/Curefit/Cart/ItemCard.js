import React, { useContext } from 'react'
import { CureContext } from '../Context/CureContext'


const ItemCard = () => {
    const {
        state:
        {
            Eat, Cart
        }, decrementCounter, incrementCounter, index, deletedata
    } = useContext(CureContext)
    return (
        <div style={{ marginTop: '8%' }}>
            <div class=" ml-5 mb-5">
                {Cart.map(({ img, item, offerprice, quantity },index) => (
                    <div>
                        <div class="card border-0" height="auto" width="auto">
                            <div class="row">
                                <div class="col-sm-4">
                               
                                    <img src={img} height='125' width='140' />
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                    <h6 onClick={() => deletedata(index)} className=" font-weight-bold text-danger float-right">
                                            X
                                        </h6>
                                        <div><b class="text-secondary">{item}</b></div>
                                        <div><h5>₹{offerprice * quantity}</h5></div>
                                        <div>
                                            <h2 class="badge badge-pill badge-light border border-warning">
                                                {!!quantity && (
                                                    <img src="https://static.cure.fit/assets/images/minus.svg" width="15px" height="15px" onClick={() => decrementCounter(item)} />
                                                )}
                                                &nbsp;
                                                <span className="badge badge-white">{quantity}</span> &nbsp;
                                                <img src="https://static.cure.fit/assets/images/plus.svg" width="15px" height="15px" onClick={() => incrementCounter(item)} />
                                            </h2>
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ItemCard
// style={{ width: "30rem", height: '10rem' }}