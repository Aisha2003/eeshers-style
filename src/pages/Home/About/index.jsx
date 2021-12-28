import React from 'react';
import { Link } from 'react-router-dom';
import Me from "../../../config/me.jpeg";
import "./about.css";

const Header = () => (
  <div className='home-header abt'>
    <h2>About me</h2>
    <img src={Me} alt="Umar" className='me-img'/>
    <h3 className="c-me">Contact me</h3>
    <ul className='c-links'>
      <li>Email: <a href="mailto:faruqaisha19@gmail.com">faruqaisha19@gmail.com</a></li>
      <li>Instagram: <a href="https://instagram.com/Eesher_faruq_">@Eesher_faruq_</a></li>
      <li>Whatsapp <a href="tel:+2349033890606">09033890606</a></li>
    </ul>
    <div className="about">
      <button ><Link to={"/"} className="abt-link"> <span>&#8592;</span> Go Home</Link></button>
    </div>
  </div>
);

export default Header;
