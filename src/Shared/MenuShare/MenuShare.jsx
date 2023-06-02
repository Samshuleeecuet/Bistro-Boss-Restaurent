import React from 'react';

const MenuShare = ({menu,handleShow,length,show}) => {
    return (
        <>
            <div className='flex' key={menu._id}>
                    <div className='w-[100px] p-4'>
                        <img className='w-full' style={{borderRadius: '0px 200px 200px 200px', height:'50px', width:'50px'}} src={menu.image}></img>

                    </div>
                    <div className='font-serif w-96'>
                        <p>{menu.name} ------------------</p>
                        <p>{menu.recipe}</p>
                    </div>
                    <div className='text-yellow-300'>
                        <p>${menu.price}</p>
                    </div>
            </div>
            
        </>
    );
};

export default MenuShare;