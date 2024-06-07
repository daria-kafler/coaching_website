import { useState } from 'react';
import '../styles/footer.css';
import Terms from './terms';
import Privacy from './privacy';
import { InstagramIcon, LinkedinIcon, ThreadsIcon, XIcon } from '../assets/icons.jsx';

const today = new Date();

export default function Footer() {
  // Using a state to show or not show the privacy policy and terms. the state here is managed by the links to these pages below
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <section id="footer">
        <div className="content-wrapper">
          <div className="left">
            <a href="#" className="to-home">
              Daria.
            </a>
            <div className="copyright">
              <svg id="copyright-icon" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
              </svg>
              <p>{today.getFullYear()} All rights reserved.</p>
            </div>
          </div>
          <div className="right">
            <div className="company">
              <p>Company</p>
              <a href="#about">About</a>
              <a href="#products">Services</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            <div className="legal">
              <p>Legal</p>
              <a onClick={() => setShowPrivacy(true)}>Privacy Policy</a>
              <a onClick={() => setShowTerms(true)}>Terms of Service</a>
            </div>
            <div className="socials">
              <p>Socials</p>
              {/* The social icons are coming from icons.jsx where all the icons are kept as functional components */}
              <div className="icons">
                <a href="#" className="social-icon instagram">
                  <InstagramIcon />
                </a>
                <a href="#" className="social-icon x">
                  <XIcon />
                </a>
                <a href="#" className="social-icon linkedin">
                  <LinkedinIcon />
                </a>
                <a href="#" className="social-icon threads">
                  <ThreadsIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* These are the modal components that appear when you click on privacy or terms */}
      {showTerms && <Terms showTerms={showTerms} setShowTerms={setShowTerms} />}
      {showPrivacy && <Privacy showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy} />}
    </>
  );
}
