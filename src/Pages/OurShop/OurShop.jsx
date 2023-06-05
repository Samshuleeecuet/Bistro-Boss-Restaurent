import React from 'react';
import banner from './../../../assets/shop/banner2.jpg';
import MenuHeader from '../OurMenu/MenuHeader';
import ShopTab from './ShopTab';
import useTitle from '../../Hooks/useTitle';
const OurShop = () => {
    useTitle('Our Shop')
    return (
        <div>
             <MenuHeader banner={banner} text= {'OUR SHOP'}/>
             <ShopTab/>
        </div>
    );
};

export default OurShop;