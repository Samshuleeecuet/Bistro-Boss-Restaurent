import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuShare from '../../Shared/MenuShare/MenuShare';
import ShowButton from '../../Shared/ShowButton/ShowButton';

const MenuItem = () => {
    const [menus,setMenu] = useState([])
    const [temp,setTemp] = useState([])
    const [show, setShow] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then( res=> res.json())
        .then( data => {
            setMenu(data)
            setTemp(data.slice(0,6))
        })
    },[])
    const handleShow =() =>{
        setShow(false);
        setTemp(menus)
    }
    console.log()
    return (
        <div className='mt-10 mb-10'>
            <SectionTitle heading={'From Our Menu'} subheading={'---Check it Out----'}></SectionTitle>
           <div className='grid grid-cols-2 gap-6'>
           {
                temp.map(menu=> 
                    <MenuShare menu={menu} key={menu._id}/>
                )
            }
           </div>
           <ShowButton handleShow={handleShow} text={'show ALl menu'} length={temp.length} show={show}/>
        </div>
    );
};

export default MenuItem;