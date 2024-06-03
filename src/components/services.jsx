```
The only thing I hate is the tooltip in the entire project.
I found out about a better tooltip a little too late into the project so I might come and in take a look at that if you like.
```

import { Tooltip } from 'react-tooltip';
import { highlightAnnotate } from '../assets/annotationSettings.js';
import { RoughNotation } from 'react-rough-notation';
import { TooltipIcon } from '../assets/icons.jsx';

export default function Services() {
  return (
    <>
      <section id="products" className='diagonal'>
        <div className="content-wrapper">
          <h1>
            Ways we can{' '}
            <RoughNotation {...highlightAnnotate} color="hsla(250, 78%, 11%, 100%)">
              work together
            </RoughNotation>
          </h1>
          <ul className="services-list">
            <li className="single-service">
              <p className="service-name">Sustainable Shift</p>
              <p className="service-text">
                Embark on a journey of transformation over ten to twenty weeks. Personalised coaching and support
                through daily text check ins, and weekly hour long sessions via phone, video or walk & talk.
                <TooltipIcon />
              </p>
              <Tooltip id="my-tooltip-children-multiline" anchorSelect=".tooltip-icon" place="bottom">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>I’ll be happy to join you in the London City, Camden, Islington, or Hackney areas.</span>
                  <span>Whether it’s taking a walk or settling in on a park bench,</span>
                  <span>fresh air and vitamin D are recognized to improve mood and brain function,</span>
                  <span>helping you work on your goals in a relaxed and refreshed way!</span>
                </div>
              </Tooltip>
            </li>
            <li className="single-service">
              <p className="service-name">Transformation Turbo</p>
              <p className="service-text">
                For the next four weeks, get laser-focused support and guidance through daily 10 min video or phone
                checks ins, as well as weekly hour long sessions via phone, video or walk & talk.
              </p>
            </li>
            <li className="single-service">
              <p className="service-name">Clarity Call</p>
              <p className="service-text">
                Check-in when you need a "rubber duck" to discuss a specific challenge and find solutions together. One
                hour. Can be done via phone, video or walk & talk.
              </p>
            </li>
            <li className="single-service">
              <p className="service-name">
                COMING SOON!
                <br />
                Skill Sprint
              </p>
              <p className="service-text">
                A Self-paced ADHD-friendly program for newcomers into the tech industry, tailored to cover what
                bootcamps tend to miss!
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
