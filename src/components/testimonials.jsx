import { testimonials } from '../assets/testimonials';
import TestimonialCarousel from '../components/testimonialsCarousel.jsx';
import { RoughNotation } from 'react-rough-notation';
import { underlineAnnotate } from '../assets/annotationSettings.js';

const user_testimonials = [...testimonials];

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="content-wrapper">
          <h1>
            Right now, I’m just a lady on the internet, so don’t listen to me.{' '}
            <RoughNotation {...underlineAnnotate}>Here is what others had to say.</RoughNotation>
          </h1>
          <div className="all-testimonials">
            <TestimonialCarousel user_testimonials={user_testimonials} />
          </div>
        </div>
      </section>
    </>
  );
}
