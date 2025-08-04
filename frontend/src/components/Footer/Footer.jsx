import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img className="logoF" src={assets.logoF} alt="" />
              <p>TasteTown brings delicious meals from your favorite local restaurants straight to your doorstep. Whether you're hungry for a quick snack or a full feast, we've got you covered with fast, reliable delivery and a wide range of cuisines. Order in seconds, enjoy in minutes!</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                  <li>+94-770-081-388</li>
                  <li>tastetown@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
      <p className="footer-copyright">Copyright 2025 © TasteTown.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
