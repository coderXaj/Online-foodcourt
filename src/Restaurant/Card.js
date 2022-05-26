import React from 'react';

const Card = ({ val, onClick }) => {
    const { img, dname, price, hash, } = val;

    return (
        <>
            <div>
                <div className='container'>
                    <img src={img} alt='pic' />
                    <div><spam className="spam-cont">{dname}</spam></div>
                    <div className='spam-price'><span>${price}</span></div>
                    <div className='contain'>
                        <a href={hash} target='_blank'><p>Click here to read</p></a>
                        <div className='containflex'>
                            <button className='btn' onClick={onClick}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card