import React, { useContext } from 'react'
import { CureContext } from './Context/CureContext'

const PaymentModal = () => {
    const { state: { Amount } } = useContext(CureContext)
    return (
        <div>
            <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalScrollableTitle">Payment Option</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <ul style={{ listStyleType: "none" }}>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded ">
                                    <img src="https://static.cure.fit/assets/images/paytm_v1.svg" />
                            Paytm
                            </li>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded">
                                    <img src="https://static.cure.fit/assets/images/card-pay.svg" />
                            Credit/Debit Card
                            </li>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded">
                                    <img src="https://static.cure.fit/assets/images/phonePe.svg" />
                            PhonePe/BHIM UPI
                            </li>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded">
                                    <img src="https://static.cure.fit/assets/images/pay_later.svg" />
                           Pay Later
                            </li>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded">
                                    <img src="https://static.cure.fit/assets/images/paypal.svg" />
                           PayPal
                            </li>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded">
                                    <img src="https://static.cure.fit/assets/images/net-banking.svg" />
                            Net Banking
                            </li>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded">
                                    <img src="https://static.cure.fit/assets/images/amazon-pay-short.png" height="31" width="50" />
                            Amazon Pay
                            </li>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded">
                                    <img src="https://static.cure.fit/assets/images/upi-payment.svg" height="31" width="50" />
                            UPI
                            </li>
                                <li class="text-dark shadow p-3 mb-5 bg-white rounded">
                                    <img src="https://static.cure.fit/assets/images/wallets.svg" />
                           Wallet
                            </li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success rounded-pill">PAY&nbsp;{Amount}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal
