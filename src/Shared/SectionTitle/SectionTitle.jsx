import React from 'react';


const SectionTitle = ({heading,subheading}) => {
    return (
            <div>
                <div className='mx-auto mb-12 w-72 text-center'>
                <p className='text-yellow-300 italic'>{subheading}</p>
                <div className="divider"></div>
                <p className='text-xl uppercase font-semibold'>{heading}</p>
                <div className="divider"></div>
            </div>
            
            </div>
    );
};

export default SectionTitle;