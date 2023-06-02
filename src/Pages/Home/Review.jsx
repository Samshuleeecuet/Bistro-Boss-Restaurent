import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Review = () => {
    const [reviews,setReview]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data=> setReview(data))
    },[])

    return (
        <div className='mt-10 mb-10'>
            <SectionTitle heading={'TESTIMONIALS'} subheading={'---What Our Clients Say---'}/>
            <div>
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
                {
                    reviews.map(review=>
                    <SwiperSlide key='review._id'>
                    <div>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                        className='mx-auto'
                        />
                        <><FaQuoteLeft className='text-5xl mx-auto mt-5 mb-5'></FaQuoteLeft></>
                    <p className='w-4/5 mx-auto'>{review.details}</p>
                    <p className='text-yellow-600 font-bold text-2xl uppercase mt-2'>{review.name}</p>
                    </div>
                    </SwiperSlide>
                    )
                }
                
      </Swiper>
            </div>
        
        </div>
    );
};

export default Review;