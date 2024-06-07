import AOS from 'aos';
import 'aos/dist/aos.css';
import Daria from '/src/assets/Daria-hat.jpg';
import { useEffect } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { underlineAnnotate, highlightAnnotate } from '../assets/annotationSettings.js';

export default function Teamup() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="team-up">
        <div className="content-wrapper">
          <h1>
            <RoughNotation {...highlightAnnotate} color="hsla(250, 78%, 11%, 100%)" id="decorated-text">
              Let's team up!
            </RoughNotation>
          </h1>
          <img data-aos="fade-left" data-aos-duration="2000" src={Daria} alt="" />
          <div className="text-content">
            <p>
              We'll deep dive into your
              <RoughNotation {...underlineAnnotate} id="decorated-text">
                {' '}
                movement habits, connection with food, and work productivity patterns.
              </RoughNotation>{' '}
              This will allow us to focus on what truly matters to you and cut through the noise.
            </p>
            <p>
              We’ll find
              <RoughNotation {...underlineAnnotate} id="decorated-text">
                {' '}
                practical solutions that work for you
              </RoughNotation>
              , to help navigate any overwhelm and keep you on track. Covering nutrition, fitness, and strategies to
              improve productivity at work.
            </p>
            <p>
              Count on me for
              <RoughNotation {...underlineAnnotate} id="decorated-text">
                {' '}
                real-time support
              </RoughNotation>{' '}
              and sprinkle some encouragement throughout your day.
            </p>
            <p>
              Every week, we'll look back on how you're doing and fine-tune our strategies to
              <RoughNotation {...underlineAnnotate} id="decorated-text">
                {' '}
                fit into your life.
              </RoughNotation>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
