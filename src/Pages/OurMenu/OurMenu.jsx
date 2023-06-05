import React from 'react';
import MenuHeader from './MenuHeader';
import OfferSection from './OfferSection';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import dessert from './../../../assets/menu/dessert-bg.jpeg';
import salad from './../../../assets/menu/salad-bg.jpg';
import soup from './../../../assets/menu/soup-bg.jpg';
import pizza from './../../../assets/menu/pizza-bg.jpg';
import MenuTitle from '../../Shared/ShareMenuCard/MenuTitle';
import banner from './../../../assets/menu/banner3.jpg';
import useTitle from '../../Hooks/useTitle';
const OurMenu = () => {
    useTitle('Our Menu')
    const subtitle = `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    return (
        <div>
            <MenuHeader banner={banner} text= {'OUR MENU'}/>
            <SectionTitle heading={`today's offer`} subheading={`---Don't miss---`}/> 
            <OfferSection categories={'offered'}/>
            <MenuTitle banner={dessert} title={'dessert'} subtitle={subtitle}/>
            <OfferSection categories={'dessert'}/>
            <MenuTitle banner={salad} title={'salad'} subtitle={subtitle}/>
            <OfferSection categories={'salad'}/>
            <MenuTitle banner={pizza} title={'pizza'} subtitle={subtitle}/>
            <OfferSection categories={'pizza'}/>
            <MenuTitle banner={soup} title={'soup'} subtitle={subtitle}/>
            <OfferSection categories={'soup'}/>
            
        </div>
    );
};

export default OurMenu;