import React from 'react';
import { FaPhoneAlt,FaClock, FaLocationArrow } from "react-icons/fa";


const ContactDetails = () => {
    return (
        <div className='grid grid-cols-3 mb-10'>
            <div className='w-full'>
                <div className='w-96 border mx-auto'>
                <p className='bg-[#D1A054] h-12 pt-3'><FaPhoneAlt className= 'text-white text-2xl w-full'/></p>
                <div className='text-center pt-5 pb-16 mb-10 bg-opacity-70 bg-gray-300 w-3/4 mx-auto'>
                    <h2 className='uppercase font-semibold text-2xl'>phone</h2>
                    <p className='pt-4'>+8801816244741</p>
                </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-96 border mx-auto'>
                <p className='bg-[#D1A054]  h-12 pt-3'><FaLocationArrow className= 'text-white text-2xl w-full'/></p>
                <div className='text-center pt-5 pb-16 mb-10 bg-opacity-70 bg-gray-300 w-3/4 mx-auto'>
                    <h2 className='uppercase font-semibold text-2xl'>Address</h2>
                    <p className='pt-4'>Shaheed Mohammad Shah Hall<>CUET</></p>
                </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-96 border mx-auto'>
                <p className='bg-[#D1A054]  h-12 pt-3'><FaClock className= 'text-white text-2xl w-full'/></p>
                <div className='text-center pt-5 pb-10 mb-10 bg-opacity-70 bg-gray-300 w-3/4 mx-auto'>
                    <h2 className='uppercase font-semibold text-2xl'>Working hours</h2>
                    <p className='pt-4'>Mon - Fri: 08:00 - 22:00<br/>Sat - Sun: 10:00 - 23:00</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;