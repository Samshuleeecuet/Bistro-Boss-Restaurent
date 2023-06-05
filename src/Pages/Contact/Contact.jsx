import React from 'react';
import useTitle from '../../Hooks/useTitle';
import MenuTitle from '../../Shared/ShareMenuCard/MenuTitle';
import banner from './../../../assets/contact/banner.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = () => {
    useTitle('Contact')
    return (
        <>
            <MenuTitle banner={banner} title={'CONTACT US'} subtitle={'Would you like to try a dish?'}></MenuTitle>
            <SectionTitle heading={'our location'} subheading={'---Visit Us---'}/>
            <ContactDetails/>
            <SectionTitle heading={'contact form'} subheading={'---Send Us a Message---'}/>
            <ContactForm/>
        </>
    );
};

export default Contact;