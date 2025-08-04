import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  const handleNavClick = (section) => {
    // Scroll to section or handle navigation
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform) => {
    // Add your social media URLs here
    const socialLinks = {
      facebook: 'https://facebook.com/tastetown',
      twitter: 'https://twitter.com/tastetown',
      linkedin: 'https://linkedin.com/company/tastetown'
    };
    
    if (socialLinks[platform]) {
      window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:tastetown@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+94770081388';
  };

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img className="logoF" src={assets.logoF} alt="TasteTown Logo" />
              <p>TasteTown brings delicious meals from your favorite local restaurants straight to your doorstep. Whether you're hungry for a quick snack or a full feast, we've got you covered with fast, reliable delivery and a wide range of cuisines. Order in seconds, enjoy in minutes!</p>
              <div className="footer-social-icons">
                <img 
                  src={assets.facebook_icon} 
                  alt="Follow us on Facebook" 
                  onClick={() => handleSocialClick('facebook')}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => e.key === 'Enter' && handleSocialClick('facebook')}
                />
                <img 
                  src={assets.twitter_icon} 
                  alt="Follow us on Twitter" 
                  onClick={() => handleSocialClick('twitter')}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => e.key === 'Enter' && handleSocialClick('twitter')}
                />
                <img 
                  src={assets.linkedin_icon} 
                  alt="Connect with us on LinkedIn" 
                  onClick={() => handleSocialClick('linkedin')}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => e.key === 'Enter' && handleSocialClick('linkedin')}
                />
              </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                  <li onClick={() => handleNavClick('home')} role="button" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}>Home</li>
                  <li onClick={() => handleNavClick('about')} role="button" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && handleNavClick('about')}>About us</li>
                  <li onClick={() => handleNavClick('delivery')} role="button" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && handleNavClick('delivery')}>Delivery</li>
                  <li onClick={() => handleNavClick('privacy')} role="button" tabIndex="0" onKeyDown={(e) => e.key === 'Enter' && handleNavClick('privacy')}>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                  <li 
                    onClick={handlePhoneClick}
                    role="button" 
                    tabIndex="0" 
                    onKeyDown={(e) => e.key === 'Enter' && handlePhoneClick()}
                    title="Call us"
                  >
                    <span className="contact-icon">📞</span> +94-770-081-388
                  </li>
                  <li 
                    onClick={handleEmailClick}
                    role="button" 
                    tabIndex="0" 
                    onKeyDown={(e) => e.key === 'Enter' && handleEmailClick()}
                    title="Email us"
                  >
                    <span className="contact-icon">✉️</span> tastetown@gmail.com
                  </li>
                </ul>
            </div>
        </div>
        <hr />
      <p className="footer-copyright">Copyright 2025 © TasteTown.com - All Right Reserved</p>
    </div>
  )
}

export default Footer