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
                You're tired of diets that ban your favourite foods and want a sustainable approach to nutrition.
              </li>
              <li data-aos="fade-left" data-aos-duration="2000">
                {' '}
                You want to transform your body without spending hours doing cardio at the gym.
              </li>
              <li data-aos="fade-right" data-aos-duration="2000">
                You aim to be a positive, healthy role model for your loved ones but struggle to prioritise self-care.
              </li>
              <li data-aos="fade-left" data-aos-duration="2000">
                You feel overwhelmed by clutter and disorganisation and need practical solutions to boost productivity.
                You crave work-life balance but feel stuck in a cycle of overwork and burnout.
              </li>
              <li data-aos="fade-right" data-aos-duration="2000">
                You're ready to overcome self-doubt and procrastination to unlock your full potential.
              </li>
              <li data-aos="fade-left" data-aos-duration="2000">
                You have ADHD and struggle with managing your energy levels, both in your health journey and at work.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
