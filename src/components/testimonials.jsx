import { testimonials } from '../assets/testimonials';
import TestimonialCarousel from '../components/testimonialsCarousel.jsx';

const user_testimonials = [...testimonials];

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="content-wrapper">
          <div className="all-testimonials">
            <TestimonialCarousel user_testimonials={user_testimonials} />
          </div>
          <h1>Hear from our success stories...</h1>
        </div>
      </section>
    </>
  );
}
