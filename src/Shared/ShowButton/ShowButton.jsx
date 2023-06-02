import React from 'react';

const ShowButton = ({handleShow,length,show,text}) => {
    return (
        <div>
             <div className='text-center'>
                {
                    (show && length>0) && <button className='btn mb-4 border-b-2 border-b-black' onClick={handleShow}>{text}</button>
                }
           </div>
        </div>
    );
};

export default ShowButton;