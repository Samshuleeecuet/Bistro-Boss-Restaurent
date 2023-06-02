import React from 'react';
import Banner from './Banner';
import CaroselSection from './CaroselSection';
import ReviewSection from '../../Shared/ReviewSection/ReviewSection';
import MenuItem from './MenuItem';
import useTitle from '../../Hooks/useTitle';
import Call from './Call';
import ChefSection from './ChefSection';
import Review from './Review';



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <CaroselSection/>
            <ReviewSection/>
            <MenuItem/>
            <Call></Call>
            <ChefSection/>
            <Review/>
        </div>
    );
};

export default Home;