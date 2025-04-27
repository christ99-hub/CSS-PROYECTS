
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  
  
  
  
  return (
    <footer className="footer">
      <div className="footerContainer">
      <div className="footerlenta">
        <div className="logo-h1">
      <div className="logo-container">
          <div className="moon"></div>
        </div>
      <h3 className="h3title">LENTA </h3>
      </div>
      <p className="footer-p"> A digital studio 
        focusing on limitless creativity.
       Lenta is involved in creating
      digital art, design, animation,</p>
      </div>
      <div className="SITEMAP">
      <h4 className="footer-h4">SITEMAP </h4>
      <ul className="nav-links-footer">
        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Support</a></li>
      </ul>
      </div>
      
      <div className="contacts">
      <h4 className="contact-h4">CONTACT </h4>
      <div className="contact-links">
      <a className="correo1" href="#">contact@buraqlab.com</a>
      <a className="correo2" href="#">taheruius@buraqlab.com</a>
      <a className="numberphone" href="#">ulc +44 7786 408923</a>
      <a className="address" href="#">united kingdom, ng235ae</a>
      </div>
      </div>
      </div>
      

      <div className="socials">
        
      <SocialIcon
    fgColor="white"
    bgColor="black" 
    style={{
      width: 50,
      height: 50,
      borderRadius: '50%',
      marginRight: '10px',
      boxShadow: '0 0 0 1px white, 0 0 0 3px black',
    }}
    url="https://facebook.com"
  />
      <SocialIcon url="https://instagram.com"
      fgColor="white"
      bgColor="black" 
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginRight: '10px',
        boxShadow: '0 0 0 1px white, 0 0 0 3px black',
      }}  />
        <SocialIcon
        fgColor="white"
        bgColor="black" 
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          marginRight: '10px',
          boxShadow: '0 0 0 1px white, 0 0 0 3px black',
        }} 
         url="https://twitter.com" />
         <SocialIcon
        fgColor="white"
        bgColor="black" 
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          marginRight: '10px',
          boxShadow: '0 0 0 1px white, 0 0 0 3px black',
          
        }} 
         url="https://github.com" />
        <SocialIcon
        fgColor="white"
        bgColor="black" 
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          marginRight: '10px',
          boxShadow: '0 0 0 1px white, 0 0 0 3px black',
          
        }} 
         url="https://linkedin.com" />
      </div>
      
    </footer>
  );
};

export default Footer;
