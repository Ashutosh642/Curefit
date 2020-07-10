const reducer = (state, action) => {

    const { type, payload: context } = action
    const { Home, Live, Mind, Eat, Gear, Membership, Details, Amount, Cart } = state;

    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...context
            }
        }

        case 'VIEW_DETAILS': {

            return {
                ...state,
                Details: context
            }
        }

        case 'PAYMENT': {

            return {
                ...state,
                Amount: context
            }
        }

        case 'ADD_TO_CART': {
            let c = []
            c.push(context)
            return {
                ...state,
                Cart: [...Cart,...c]
            }
        }

        case 'TOTAL_COST':{
            return{
                ...state,
                ...context
            }
        }

        case 'DECREMENT_COUNTER': {
            const { item } = context
            Cart.filter(a=>a.item==item)[0].quantity--
            
            return {
                ...state,
                Cart: [...Cart]
            }
        }

        case 'INCREMENT_COUNTER': {
            const { item } = context
            Cart.filter(a=>a.item==item)[0].quantity++
            return {
                ...state,
                Cart: [...Cart]
            }
        }

        case 'DELETE_DATA': {
            const { index } = context
            Cart.filter((w,i)=>i!=index)
            console.log(Cart.filter((w,i)=>i!=index))
            return {
                ...state,
                Cart:[... Cart.filter((w,i)=>i!=index)]
            }
        }
        default: {
            return state
        }
    }
}
export default reducer