import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
              <li data-aos="fade-right" data-aos-duration="2000">
                I’m sick of being on a diet, I want to <u>eat my favourite foods again</u>
              </li>
              <li data-aos="fade-left" data-aos-duration="2000">
              I’ve been <u>doing cardio for ages</u> but don’t see any changes              </li>
              <li data-aos="fade-right" data-aos-duration="2000">
              I want to be a healthy role model for my loved ones but end up <u>neglecting myself</u>              </li>
              <li data-aos="fade-left" data-aos-duration="2000">
              I need a better work-life balance but <u>too overwhelmed</u> to know where to start              </li>
              <li data-aos="fade-right" data-aos-duration="2000">
              I want to do well at work, but I feel like <u>my ADHD is holding me back</u>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
