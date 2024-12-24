import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={"/Autobots.png"} alt="Logo"  width={160} height={110} />
      </div>
      <p className="footer-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        consequuntur amet culpa cum itaque neque.
      </p>
      <nav className="footer-nav">
        <ul className="footer-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
      <div className="footer-social">
        <a href="#" className="social-icon facebook"><FaFacebook /></a>
        <a href="#" className="social-icon instagram"><FaInstagram /></a>
        <a href="#" className="social-icon twitter"><FaTwitter /></a>
        <a href="#" className="social-icon github"><FaGithub /></a>
        <a href="#" className="social-icon google"><FaGoogle /></a>
      </div>
    </footer>
  )
}

export default Footer

