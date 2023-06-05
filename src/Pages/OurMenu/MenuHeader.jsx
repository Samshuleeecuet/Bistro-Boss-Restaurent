import React from 'react';
const MenuHeader = ({banner,text}) => {
    return (
            <div className="hero h-[600px]" style={{backgroundImage:` url(${banner})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-xl bg-black bg-opacity-40 pt-20 pb-20 pl-32 pr-32 ">
                <h1 className="mb-5 text-5xl font-bold">{text}</h1>
                <p className="mb-5 uppercase">would you like to try a dish?</p>
                </div>
            </div>
            </div>
    );
};

export default MenuHeader;