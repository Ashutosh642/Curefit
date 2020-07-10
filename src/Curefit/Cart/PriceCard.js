import React, { useContext } from 'react'
import { CureContext } from '../Context/CureContext'

const PriceCard = () => {
    const { state: { TotalCost,Cart } } = useContext(CureContext)
    return (
        <div style={{ marginTop: '8%' }}>
            <div class="card border-0 p-3 mb-5 bg-white rounded" style={{ width: '22rem' }}>
                <div>
                    <b>PRICE DETAILS</b>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col-sm-6">
                                Price({Cart.length}item)
                            </div>
                            <div className="col">
                                <b>&#8377; {TotalCost}</b>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-6">
                                Delivery Fee
                            </div>
                            <div className="col">
                                <p className="text-success"> Free</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col-sm-6">
                                <b>Total Payable</b>
                            </div>
                            <div className="col">
                                <b>&#8377; {TotalCost}</b>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PriceCard
