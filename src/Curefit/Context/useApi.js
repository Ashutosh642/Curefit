import React, { useEffect, useReducer } from 'react'

import reducer from './reducer'

const useApi = () => {
    const INITIAL_STATE = {
        Home: [],
        Live: [],
        Mind: [],
        Eat: [],
        Gear: [],
        Membership: [],
        Details: {},
        Amount: "",
        Cart:[],
        TotalCost:0
    }
    const [state, dispatch] = useReducer(reducer,INITIAL_STATE)

    const { Home, Live, Mind, Eat, Gear, Membership, Details, Amount,Cart } = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/7d75d774-b2de-11ea-a126-edc6f0c60707')
            .then(res => res.json())
            .then(json => {
                let [{ home, live, mind, eat, gear, membershipDetails }] = json
                setTimeout(() => {
                    dispatch({
                        type: 'API_SUCCESS', payload: {
                            Home: [...home],
                            Live: [...live],
                            Mind: [...mind],
                            Eat: [...eat],
                            Gear: [...gear],
                            Membership: [...membershipDetails]
                        }
                    })
                }, 800)

            })

    }, []);

    useEffect(()=>{
        let { Home, Live, Mind, Eat, Gear, Membership, Details, Amount,Cart,TotalCost } = state;
        TotalCost=Cart.reduce((a,b)=>a+(Number(b.offerprice)*Number(b.quantity)),0)
        dispatch({type:'TOTAL_COST',payload:{TotalCost:TotalCost}})

    },[Cart]);

    const viewDetails = (i) => {
        console.log(i)
        dispatch({ type: 'VIEW_DETAILS', payload: i })
    }

    const payment = (e) => {
        console.log(e.target.value)
        // let x = Membership.filter(a=>a.isChecked==true)
        //     Membership[]
        // console.log(x)

        dispatch({ type: 'PAYMENT', payload: e.target.value })
    }

    const addToCart = (x) => {
       
        dispatch({ type: 'ADD_TO_CART', payload: x })
    }

    const decrementCounter = (item) => {
        dispatch({ type: 'DECREMENT_COUNTER', payload: { item } })
    }

    const incrementCounter = (item) => {
        dispatch({ type: 'INCREMENT_COUNTER', payload: { item } })
    }

    const deletedata = (index) => {
        dispatch({ type: 'DELETE_DATA', payload: { index } })
    }
    return {
        state,
        viewDetails,
        payment,
        addToCart,
        decrementCounter,
        incrementCounter,
        deletedata
    }
}
export default useApi