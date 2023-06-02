import React from 'react';
import banner from './../../../assets/shop/banner2.jpg';
import MenuHeader from '../OurMenu/MenuHeader';
import ShopTab from './ShopTab';
const OurShop = () => {
    return (
        <div>
             <MenuHeader banner={banner} text= {'SHOP'}/>
             <ShopTab/>
        </div>
    );
};

export default OurShop;