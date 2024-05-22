import AOS from 'aos';
import 'aos/dist/aos.css';
import Daria from '../assets/Daria-hat.jpg';
import { useEffect } from 'react';

export default function Teamup() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="team-up">
        <div className="content-wrapper">
          <h1>Let's team up!</h1>
          <img data-aos="fade-left" data-aos-duration="2000" src={Daria} alt="" />
          <div data-aos="fade-up" data-aos-duration="2000" className="text-content">
            <p>
              We'll deep dive into your <u>movement habits, connection with food, and work productivity patterns.</u>
              This will allow us to focus on what truly matters to you and cut through the noise.
            </p>
            <p>
              We’ll find <u>practical solutions that work for you</u>, to help navigate any overwhelm and keep you on
              track. Covering nutrition, fitness, and strategies to improve productivity at work.
            </p>
            <p>
              Count on me for <u>real-time support</u> and sprinkle some encouragement throughout your day.
            </p>
            <p>Every week, we'll look back on how you're doing and fine-tune our strategies to <u>fit into your life.</u></p>
          </div>
        </div>
      </section>
    </>
  );
}
