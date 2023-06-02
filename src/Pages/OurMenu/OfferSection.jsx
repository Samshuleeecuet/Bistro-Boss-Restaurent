import React, { useEffect, useState } from 'react';
import MenuShare from '../../Shared/MenuShare/MenuShare';

import ShowButton from '../../Shared/ShowButton/ShowButton';

const OfferSection = ({categories}) => {
    const [menus,setMenu] = useState([])
    const [temp,setTemp] = useState([])
    const [show, setShow] = useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/menu/category/${categories}`)
        .then(res=> res.json())
        .then(data=> {
            setMenu(data)
            setTemp(data.slice(0,6))
        })
    },[categories]) 
    const handleShow =() =>{
        setShow(false);
        setTemp(menus)
    }

    return (
        <div>
              
            <div className='grid grid-cols-2 gap-6'>
           {
                temp.map(menu=> 
                    <MenuShare menu={menu} key={menu._id}/>
                )
            }
           </div>
           <ShowButton handleShow={handleShow} text={'ORDER YOUR FAVOURITE FOOD'} length={temp.length} show={show}/>

        </div>
    );
};

export default OfferSection;