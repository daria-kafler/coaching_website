import { RoughNotation } from 'react-rough-notation';
import {underlineAnnotate, circleAnnotate, boxAnnotate} from '../assets/annotationSettings.js'

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <h1 className="hero-title">
            Hi I'm <RoughNotation {...underlineAnnotate} animate={true}>Daria.</RoughNotation>
          </h1>
          <div className="hero-text">
            <p>
              I help tech professionals and ADHD brains achieve{' '}
              <strong>sustainable health and productivity goals.</strong>
            </p>
            <p> No extreme restrictions, no passing trends.</p>
            <p>
              <RoughNotation {...underlineAnnotate} id="decorated-text">
                Just what works.
              </RoughNotation>
            </p>
          </div>
          <a href="#about" className="primary-button">
            Learn more
          </a>
        </div>
      </section>
    </>
  );
}
