import React from 'react'

const CartEmpty = () => {
    return (
        <div>
            <div class="row d-flex justify-content-center">
                <div class="card border-0" style={{ width: '28rem' }}>
                    <div >
                        <h4>Your Cart</h4>
                    </div>
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco/image/home/empty-cart%403x.jpg" height="300" width="300"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="text-secondary text-center">Your cart is empty!!!</h5>
                        <h4 class="text-secondary">Looks like you haven't made any purchases yet</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty
