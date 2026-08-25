import React, { useState } from 'react'
import { Link } from "react-router-dom";
{/*import { Link } from "react-scroll";*/ }
import logo from "../../assets/logo1.png";
import "./Header.scss"
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="header_parent parent">
        <div className="header_cont cont">
          <img src={logo} alt="" />
          <div className="navlinks">
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            {/*<a href="/">GALLERY</a>*/ }
            <a href="#gallery">STUDIO</a>
            <a href="#contact">CONTACT</a>
            {/* <button className="btn">BOOK NOW</button> */}
          </div>
          <div className="hamburger" onClick={() => setActive(!active)}>
            {
              active ?
                <RxCross2 />
                :
                <GiHamburgerMenu />
            }
          </div>
        </div>
        {active && <div className="mobile_responsive">
          <a onClick={() => setActive(false)} href="#about">ABOUT</a>
          <a onClick={() => setActive(false)} href="#services">SERVICES</a>
          {/*<a to="">GALLERY</a>
          <a onClick={() => setActive(false)} href="#piercing">PIERCING</a>*/ }
          <a onClick={() => setActive(false)} href="#studio">STUDIO</a>
          {/*<a onClick={() => setActive(false)} href="#reviews">REVIEWS</a>*/ }
          <a onClick={() => setActive(false)} href="#contact">CONTACT</a>
          {/* <button className="btn">BOOK NOW</button> */}
        </div>}
      </div>
    </>
  );
};

export default Header;