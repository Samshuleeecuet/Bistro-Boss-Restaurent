import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();
    const loginH = location.pathname.includes('/login' );
    const RegisterH = location.pathname.includes('/register' )
    return (
        <div>
            {!(loginH || RegisterH) && <Header/>}
            <Outlet/>
            {!(loginH || RegisterH) &&  <Footer/>}
        </div>
    );
};

export default MainLayout;