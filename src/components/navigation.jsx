import { useEffect } from 'react';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RoughNotation } from 'react-rough-notation';
import { underlineAnnotate, circleAnnotate, boxAnnotate } from '../assets/annotationSettings.js';

export default function Navigation() {
  // This is just the initializer for the animation on the mobile modal
  useEffect(() => {
    AOS.init();
  }, []);

  // This is again for the mobile nav modal to come in and out
  const [showModal, setShowModal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Following are the functions to open and close the mobile nav modal
  const openModal = () => {
    setShowModal(true);
    setFadeOut(false);
  };

  const closeModal = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowModal(false);
    }, 500); // Delay to match the closing animation duration
  };

  return (
    <>
      <section className="nav-wrapper">
        <nav>
          <a href="#" className="logo">
            <RoughNotation {...circleAnnotate}>Daria.</RoughNotation>
          </a>
          <ul>
            <li className="navlink">
              <a href="#about">About</a>
            </li>
            <li className="navlink">
              <a href="#services">Services</a>
            </li>
            <li className="navlink">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
          <a href="#form" className="primary-button">
            Get in touch
          </a>
          <svg className="menu-icon" onClick={openModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
          </svg>
          {/* The mobile modal for smaller screen sizes */}
          {showModal && (
            <div data-aos="fade-left" data-aos-duration="500" className={`modal-overlay ${fadeOut ? 'fade-out' : ''}`}>
              <div className="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-x menu-icon"
                  viewBox="0 0 16 16"
                  onClick={closeModal}
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <div className="modal-content">
                  <a onClick={closeModal} href="#about">
                    About
                  </a>
                  <a onClick={closeModal} href="#products">
                    Products
                  </a>
                  <a onClick={closeModal} href="#testimonials">
                    Testimonials
                  </a>
                  <a onClick={closeModal} href="#form">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </section>
    </>
  );
}
