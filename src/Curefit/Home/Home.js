import React, { useState, useEffect, useContext } from 'react'
import './Home.css'
import Video from './Video'
import { CureContext } from '../Context/CureContext';

const Home = () => {
    const { state:
        {
            Home
        }
    } = useContext(CureContext);

    return (
        <div style={{ marginTop: '8%' }}>
 <div class="row ">
                <div class="col-sm-4 ml-5">
                    <div class="display-4">For the fun</div>
                    <div class="display-4">of fit.</div>
                    <h5 class="text-secondary">At cure.fit, we make holistic health easy for </h5>
                    <h5 class="text-secondary">you with fun group classes,healthy meals and </h5>
                    <h5 class="text-secondary">accessible primary care all on a single app.</h5>
                </div>
                <div class="col">
                   <Video></Video>
                </div>
            </div>

             <div>
                {Home.map(({ title, subTitle, about, cards }) => (
                    <div class="ml-5">
                        <h1 class="display-4">{title}</h1>
                        <h5>{subTitle}</h5>
                        <p class="mb-5">{about}</p>
                    <div class="card-deck mb-5 ">
                        {cards.map(({ cardTitle, cardAbout, cardImg }) => (
                            <div class="card-deck mb-5 ">
                                <div class="card border-0 text-white" style={{ width: '35rem', height: '25rem' }} >
                                    <img class="card-img" src={cardImg} height='400' width='50'/>
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">{cardTitle}</h5>
                                        <p class="card-text">{cardAbout}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>


                ))}
            </div>  
 
 
           
        </div>
       
    )
}

export default Home
