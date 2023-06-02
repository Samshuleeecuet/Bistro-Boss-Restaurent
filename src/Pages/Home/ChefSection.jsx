import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import bg from './../../../assets/home/featured.jpg'
const ChefSection = () => {
    return (
        <div>
            <SectionTitle heading={'chef recommends'} subheading={'---Should Try---'}/>
            <div class="hero w-full min-h-screen" style={{backgroundImage: `url(${bg})`}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-3xl">
                <div class="mb-5 max-w-md mx-auto text-xl font-bold">
                <p className='text-yellow-300 italic'>---Check it out---</p>
                <div className="border-2 rounded mt-2 mb-2"></div>
                <p className='text-3xl uppercase font-semibold'>FROM OUR MENU</p>
                <div className="border-2 rounded mt-2 mb-2"></div>

                </div>
                <div className='mb-5 text-white flex gap-4 text-left'>
                    <div className='max-w-sm'>
                        <img src={bg} alt="" srcset="" />
                    </div>
                    <div className='w-92'>
                        <p>March 20, 2023<br/>
WHERE CAN I GET SOME?<br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
<button className='btn mt-6 border-b-2 border-b-white'>View Full Menu</button>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default ChefSection;