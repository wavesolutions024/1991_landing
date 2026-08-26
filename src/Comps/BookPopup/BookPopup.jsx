import React, { useState } from "react";
import "./BookPopup.scss";
import { RxCross2 } from "react-icons/rx";

const BookPopup = ({ onClose }) => {


const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNo: "",
    gender: "",
    service: "",
    tattooStyle: "",
    tattooDescription: "",
    enquiryType: "landing page",
   
  });





  return (
    <>
      <div className="book_popup_overlay" onClick={onClose}></div>

      <div className="book_popup">
        <button className="book_popup_close" onClick={onClose}>
          <RxCross2 />
        </button>

        <span className="hero_form_tag">FREE CONSULTATION</span>

        <h2>
          Book Your Tattoo
          <br />
          Consultation
        </h2>

        <form>
          <div className="form_group full">
            <label>FULL NAME *</label>

            <input type="text" placeholder="Full name" />
          </div>

          <div className="form_row">
            <div className="form_group">
              <label>PHONE *</label>

              <input type="text" placeholder="Enter your phone number" />
            </div>


            <div className="form_group">
              <label>Gender</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select 
                </option>

                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div className="form_group">
              <label>Select Services</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select 
                </option>

                <option>Black & Grey</option>
                <option>Realism</option>
                <option>Fine Line</option>
                <option>Mandala</option>
                <option>Cover Up</option>
              </select>
            </div>
          </div>

          <div className="form_row">
            <div className="form_group">
              <label>EMAIL *</label>

              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form_row">
            <div className="form_group">
              <label>Tattoo Style *</label>

              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form_row">
            <div className="form_group">
              <label>Tattoo Budget *</label>

              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          

          <button type="submit" className="submit_btn">
            GET FREE CONSULTATION →
          </button>
        </form>
      </div>
    </>
  );
};

export default BookPopup;
