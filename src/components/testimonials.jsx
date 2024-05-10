import { testimonials } from '../assets/testimonials';
import TestimonialCarousel from '../components/testimonialsCarousel.jsx';

const user_testimonials = [...testimonials];

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="content-wrapper">
          <h1>Right now, I’m just a lady on the internet, so don’t listen to me. Here is what others had to say.</h1>
          <div className="all-testimonials">
            <TestimonialCarousel user_testimonials={user_testimonials} />
          </div>
        </div>
      </section>
    </>
  );
}
