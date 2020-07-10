import React, { useContext } from 'react'
import './Mind.css'
import { CureContext } from '../Context/CureContext'

const Mind = () => {
    const { state:
        {
            Mind
        }
    } = useContext(CureContext)

    return (
        <div style={{ marginTop: '8%' }}>
            <div class="rounded text-center mb-5">
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_1360:100,q_auto:best,f_auto/dpr_1/image/vm/681eb19f-62b9-4d7c-8319-872bba682dba.jpg" width='1204' />
            </div>

            <div class="jumbotron" >
                <h2>Mindfulness Library</h2>
                <p>Access our pre-recorded meditation sessions, at your convenience</p>
                <div class="row">
                    {Mind.map(({ img, title, about, quantity }) => (
                        <div class="col-lg-5 col-md-12 col-sm-12 shadow bg-white ml-5 mb-5 hvr-float-shadow ">
                            <div class="card border-0" height="auto" max-width="auto">
                                <div class="row">
                                    <div class="col-sm-5">
                                        <img src={img} height='256' width='180' />
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="card-body">
                                            <h4>{title}</h4>
                                            <p class="card-text">{about}</p>
                                            <br />

                                            <p>{quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div class="typography-text col-xs-12" style={{ fontSize: '80px', color: 'rgb(110, 110, 110)' }}>THE MIND IS</div>
            <div class="typography-text col-xs-12" style={{ fontSize: '60px', color: 'rgb(178, 178, 178)' }}>EVERYTHING</div>
            <div class="typography-text col-xs-12" style={{ fontSize: '40px', color: 'rgb(204, 204, 204)' }}>WHAT YOU THINK YOU BECOME.</div>

        </div>
    )
}

export default Mind
// style={{ width: "36rem", height: '16rem' }}