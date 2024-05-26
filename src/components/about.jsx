import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { underlineAnnotate } from '../assets/annotationSettings.js';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="about">
          <div className="content-wrapper">
            <div className="text-content">
              <h1>Does this sound familiar?</h1>
              <ul>
                <li>
                  I’m sick of being on a diet, I want to
                  <RoughNotation {...underlineAnnotate} id="decorated-text">
                    {' '}
                    eat my favourite foods
                  </RoughNotation>{' '}
                  again
                </li>
                <li>
                  I’ve been{' '}
                  <RoughNotation {...underlineAnnotate} id="decorated-text">
                    {' '}
                    doing cardio for ages
                  </RoughNotation>{' '}
                  but don’t see any changes
                </li>
                <li>
                  I want to be a healthy role model for my loved ones but end up{' '}
                  <RoughNotation {...underlineAnnotate} id="decorated-text">
                    {' '}
                    neglecting myself
                  </RoughNotation>
                </li>
                <li>
                  I need a better work-life balance but{' '}
                  <RoughNotation {...underlineAnnotate} id="decorated-text">
                    {' '}
                    too overwhelmed
                  </RoughNotation>{' '}
                  to know where to start
                </li>
                <li>
                  I want to do well at work, but I feel like{' '}
                  <RoughNotation {...underlineAnnotate} id="decorated-text">
                    {' '}
                    my ADHD is holding me back
                  </RoughNotation>
                </li>
              </ul>
            </div>
          </div>
      </section>
    </>
  );
}
