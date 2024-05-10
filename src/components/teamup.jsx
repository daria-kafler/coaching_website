import Daria from '../assets/Daria-hat.jpg'

export default function Teamup() {
  return (
    <>
      <section id="team-up">
        <img src={Daria} alt="" />
        <div className="content-wrapper">

          <div className="text-content">
            <h1>When you team up with me:</h1>
            <ul>
              <li>
                We'll delve into your movement habits, connection with food, and work productivity patterns. This will
                allow us to focus on what truly matters to you and cut through the noise.
              </li>
              <li>
                You'll receive a custom plan aligned with your health goals, covering nutrition, fitness, and practical
                strategies tailored to your needs. We’ll find practical solutions that work for **you**, to help navigate
                any overwhelm and keep you on track.
              </li>
              <li>
                You’ll also receive guidance and strategies to enhance productivity in your work life. Whether it's
                managing energy levels, prioritising tasks, or improving time management,
              </li>
              <li>
                Count on me for real-time responses via WhatsApp, Signal or SMS Monday to Friday from 10am to 8pm to
                tackle any challenges and sprinkle some encouragement throughout your day.
              </li>
              <li>
                Every week, we'll catch up to chat about how you're doing and fine-tune our strategies to fit seamlessly
                into your life.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
