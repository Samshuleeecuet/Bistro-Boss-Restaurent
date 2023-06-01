import React from 'react';
import review1 from './../../../assets/home/chef-service.jpg'

const ReviewSection = () => {
    return (
        <div className='relative'>
            <div>
                <img src={review1}/>
            </div>
            <div className='absolute top-28 left-20 right-20 p-12 pr-28 pl-28 border rounded-xl bg-white text-center font-serif'>
                <p className='text-3xl'>Bistro Boss</p>
                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ReviewSection;