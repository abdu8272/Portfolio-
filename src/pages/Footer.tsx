import "../assets/style/Footer.scss"; 
import instagramIcon from '../assets/images/instagram.png';
import telegramIcon from "../assets/images/telegram.png";
import GmailIcon from "../assets/images/Gmail.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container_footer">
      <h2 className="contacts_title">Contacts</h2>
        <div className="contact_cards">
        <a 
            href="mailto:abdushukurova582@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact_card"
          >
            <div className="icon_box">
              <img src={GmailIcon} alt="Instagram Icon" className="icon" />
              <h2>email:abdushukurov¹</h2>
            </div>
            
          </a>
          <a 
            href="https://t.me/abdushukurov_000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact_card"
          >
            <div className="icon_box">
              <img src={telegramIcon} alt="Telegram Icon" className="icon" />
              <h2>t.me/abdushukurov_000</h2>
            </div>
          </a>
          <a 
            href="https://www.instagram.com/_.abdu.a_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact_card"
          >
            <div className="icon_box">
              <img src={instagramIcon} alt="Instagram Icon" className="icon" />
              <h2>@abdushukurov¹</h2>
            </div>
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
