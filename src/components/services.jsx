import { Tooltip } from 'react-tooltip';
import infoIcon from '../assets/info-circle.svg';

export default function Services() {
  return (
    <>
      <section id="products">
        <div className="content-wrapper">
          <h1>Ways we can work together</h1>
          <ul className="services-list">
            <li className="single-service">
              <h3 className="service-name">Sustainable Shift</h3>
              <p className="service-text">
                Embark on a journey of transformation over ten to twenty weeks. Personalised coaching and support
                through daily text check ins, and weekly hour long sessions via phone, video or walk & talk.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="tooltip-icon"
                  data-tooltip-id="my-tooltip-children-multiline"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
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
              <h3 className="service-name">Transformation Turbo</h3>
              <p className="service-text">
                For the next four weeks, get laser-focused support and guidance through daily 10 min video or phone
                checks ins, as well as weekly hour long sessions via phone, video or walk & talk.
              </p>
            </li>
            <li className="single-service">
              <h3 className="service-name">Clarity Call</h3>
              <p className="service-text">
                Check-in when you need a "rubber duck" to discuss a specific challenge and find solutions together. One
                hour. Can be done via phone, video or walk & talk.
              </p>
            </li>
            <li className="single-service">
              <h3 className="service-name">
                COMING SOON!
                <br />
                Skill Sprint
              </h3>
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
