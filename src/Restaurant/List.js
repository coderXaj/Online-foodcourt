import React, { useEffect } from 'react';
import Data from './Data';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';


function List() {
    const initial = JSON.parse(localStorage.getItem('Data'))
    const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('Data', JSON.stringify(cart))
    }, [cart]);

    return <>
        <div className='main2'>
            {/* by using array.map function */}
            {Data.map((val) => {
                val.quantity = 1;
                return (
                    <Card key={val.id} val={val} onClick={() => { dispatch({ type: 'ADD', payload: val }) }} />
                )
            })}
        </div>
    </>;
}

export default List;

{/* fetching data through array by including index number */ }
{/* <Anant img={Data[0].img} dname={Data[0].dname} hash={Data[0].hash} />
            <Anant img='./Photos/paanipuri.jpg' dname='Paanipuri' price='20' />
            <Anant img='./Photos/idli.jpg' dname='Idli' price='30' />
            <Anant img='./Photos/dosa.jpg' dname='Dosa' price='50' />
            <Anant img='./Photos/ButterPaneer.jpeg' dname='ButterPaneer' price='70' />
            <Anant img='./Photos/Aloogobi.jpg' dname='Aloo Gobi' price='60' />
            <Anant img='./Photos/Chickenbiryani500x500.jpg' dname='Biryani' price='100' />
            <Anant img='./Photos/fishfry.jpg' dname='FishFry' price='90' />
            <Anant img='./Photos/Besan Ladoo.jpg' dname='BesanLado' price='200' />
            <Anant img='./Photos/Motichoor-Ladoo.jpg' dname='Ladoo' price='100' />
            <Anant img='./Photos/icecream.jpg' dname='IceCream' price='100' />
            <Anant img='./Photos/hakka-noodles.jpg' dname='Noodles' price='150' /> */}