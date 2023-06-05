import React from 'react';

const FoodCard = ({food}) => {
   // console.log(food)
    const {image,name,price,recipe}=food || {}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
             <div className="absolute right-10 top-4 badge p-4 bg-black text-white">{price}</div>
            <div className="card-body text-center">
                <p className="font-bold text-xl w-full">
                {name}
                </p>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-5">
                <button className='btn mb-4 border-b-2 text-yellow-800 border-b-yellow-800 hover:bg-black hover:text-white'>Add To Cart</button>
                </div>
            </div>
            </div>
    );
};

export default FoodCard;