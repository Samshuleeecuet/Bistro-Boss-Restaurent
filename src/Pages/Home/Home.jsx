import React from 'react';
import Banner from './Banner';
import CaroselSection from './CaroselSection';
import ReviewSection from '../../Shared/ReviewSection/ReviewSection';
import MenuItem from './MenuItem';
import useTitle from '../../Hooks/useTitle';



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <CaroselSection/>
            <ReviewSection/>
            <MenuItem/>
        </div>
    );
};

export default Home;