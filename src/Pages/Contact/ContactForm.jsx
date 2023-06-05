import React from 'react';
import { Form } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div>
            <div className="hero pt-10 pb-10 min-h-screen bg-base-200">
  <div className="">
    <div className=" w-full">
      <Form className="mx-auto">
        <div className='flex gap-6'> 
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name* </span>
          </label>
          <input type="text" placeholder="Enter your Name" className="input w-80 input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email*</span>
          </label>
          <input type="email" placeholder="Enter Your Email" className="input w-80 input-bordered" />
        </div>
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text font-semibold">Phone*</span>
          </label>
          <input type="text" placeholder="Enter Your Phone Number" className="input w-full input-bordered" />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text font-semibold">Message*</span>
          </label>
          <textarea type="text" placeholder="Write Your Message" className="input w-full h-52 input-bordered" />
        </div>
        <div className="form-control mt-6 w-32 mx-auto">
          <button className="btn bg-[#D1A054]">Message</button>
        </div>
      </Form>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactForm;