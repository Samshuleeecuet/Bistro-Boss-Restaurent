import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const MenuItem = () => {
    const [menus,setMenu] = useState([])
    useEffect(()=>{
        fetch('./menu.json')
        .then( res=> res.json())
        .then( data => setMenu(data))
    },[])
    //console.log(menus)
    return (
        <div className='mt-10 mb-10'>
            <SectionTitle heading={'From Our Menu'} subheading={'---Check it Out----'}></SectionTitle>
           <div className='grid grid-cols-2 gap-4'>
           {
                menus.map(menu=> 
                    <div className='flex' key={menu._id}>
                    <div className='pr-10 w-32'>
                        <img className='' style={{borderRadius: '0px 200px 200px 200px', height:'50px', width:'50px'}} src={menu.image}></img>

                    </div>
                    <div className=''>
                        <p>{menu.name} ------------------</p>
                        <p>{menu.recipe}</p>
                    </div>
                    <div>
                        <p>${menu.price}</p>
                    </div>
                </div>
                )
            }
           </div>
        </div>
    );
};

export default MenuItem;