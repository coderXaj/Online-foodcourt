const Reducer = (cart = [], action) => {
    if (action.type === 'ADD') {
        let tempcart = cart.filter((val) => val.id === action.payload.id)
        if (tempcart < 1) {
            return [...cart, action.payload]
        } else {
            alert('This item is already added');
            return cart;
        }
    }
    if (action.type === 'REMOVE') {
        return cart.filter((val) => val.id !== action.payload.id)
    }
    if (action.type === 'INCREASE') {
        return cart.map((val) => {
            if (val.id === action.payload.id) {
                return { ...val, quantity: val.quantity + 1 }
            }
            return val;
        })
    }
    if (action.type === 'DECREASE') {
        return cart.map((val) => {
            if (val.id === action.payload.id) {
                return { ...val, quantity: val.quantity - 1 }
            }
            return val;
        })
    }
    return cart;
}

export default Reducer;