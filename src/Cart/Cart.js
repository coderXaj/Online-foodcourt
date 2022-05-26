import React, { useEffect } from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';


function Cart() {
    const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('Data', JSON.stringify(cart))
    }, [cart]);

    const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
    }
    const total = cart.reduce(addition, 0);
    return (<>
        <div className='main4'>
            {(cart < 1) ? <div className='emptycart'>Cart is Empty</div> : <div className='order'>Your Order</div>}
            {cart.map((val) => {
                return (
                    <>
                        <div className='container4'>
                            <img src={val.img} alt='img' />
                            <div><span className="spam-cont">{val.name}</span></div>
                            <div className='spam-price'><span>${val.price}</span></div>
                            <div className='contain2'>
                                <button className='btn2' onClick={() => {
                                    dispatch({ type: 'INCREASE', payload: val })
                                }}><i class="fa-solid fa-plus"></i></button><span>{val.quantity}</span>
                                <button className='btn2' onClick={() => {
                                    if (val.quantity > 1) { dispatch({ type: 'DECREASE', payload: val }) }
                                    else { { dispatch({ type: 'REMOVE', payload: val }) } }
                                }}><i class="fa-solid fa-minus"></i></button>
                            </div>
                            <div className='spam-price'><span>Amount : {val.quantity * val.price}</span></div>
                            <button className='btn1' onClick={() => { dispatch({ type: 'REMOVE', payload: val }) }}>Remove from Cart</button>
                        </div>
                    </>

                )
            })}
            {(cart < 1) ? null : <div className='total-main'>
                <div className='total'>Total:{total}</div>
                <button className='btn3'>Place Order</button>
            </div>}
        </div>
    </>)
}

export default Cart
