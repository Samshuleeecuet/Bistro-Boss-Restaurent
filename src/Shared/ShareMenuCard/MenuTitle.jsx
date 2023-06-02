import React from 'react';

const MenuTitle = ({banner,title,subtitle}) => {
    return (
        <div className="hero h-[400px] mt-10 mb-5" style={{backgroundImage:` url(${banner})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-3xl bg-black bg-opacity-40 pt-10 pb-10 pl-32 pr-32 ">
                <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
                <p className="mb-5 ">{subtitle}</p>
                </div>
            </div>
            </div>
    );
};

export default MenuTitle;