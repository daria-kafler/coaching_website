import { RoughNotation } from 'react-rough-notation';
import { underlineAnnotate } from '../assets/annotationSettings.js';

import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div id="hero-background">
          <div className="overlay"></div>
          <Parallax className="parallax" translateY={[80, -40]}>
            <div className="content-wrapper">
              <h1 className="hero-title">
                Hi I'm{' '}
                <RoughNotation {...underlineAnnotate} animate={true}>
                  Daria.
                </RoughNotation>
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
          </Parallax>
        </div>
      </section>
    </>
  );
}
