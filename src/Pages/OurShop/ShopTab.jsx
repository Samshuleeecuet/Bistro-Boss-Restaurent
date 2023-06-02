import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from './FoodCard';
const ShopTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [categories,setcategories]= useState('salad')
    const [foods,setFoods]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/menu/category/${categories}`)
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[categories])
    const handleLoadData = (items)=>{
        setcategories(items)
    }
    //console.log(foods)
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='text-center mt-10 mb-10'>
        <TabList>
          <Tab onClick={()=>handleLoadData('salad')}>SALAD</Tab>
          <Tab onClick={()=>handleLoadData('pizza')}>PIZZA</Tab>
          <Tab onClick={()=>handleLoadData('soup')}>SOUPS</Tab>
          <Tab onClick={()=>handleLoadData('dessert')}>DESSERTS</Tab>
          <Tab onClick={()=>handleLoadData('drink')}>DRINKS</Tab>
        </TabList>
    
        <TabPanel>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            {
            foods?.map(menu=> <FoodCard key={menu._id} food={menu}/>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            {
            foods?.map(menu=> <FoodCard key={menu._id} food={menu}/>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            {
            foods?.map(menu=> <FoodCard key={menu._id} food={menu}/>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            {
            foods?.map(menu=> <FoodCard key={menu._id} food={menu}/>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            {
            foods?.map(menu=> <FoodCard key={menu._id} food={menu}/>)
          }
          </div>
        </TabPanel>
      </Tabs>
    );
};

export default ShopTab;