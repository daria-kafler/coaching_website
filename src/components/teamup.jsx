import Daria from '../assets/Daria-hat.jpg';

export default function Teamup() {
  return (
    <>
      <section id="team-up">
        <div className="content-wrapper">
          <h1>Team up with me</h1>
          <img src={Daria} alt="" />
            <div className="text-content">
              <p>
                We'll delve into your movement habits, connection with food, and work productivity patterns. This will
                allow us to focus on what truly matters to you and cut through the noise.
              </p>
              <p>
                You'll receive a custom plan apgned with your health goals, covering nutrition, fitness, and practical
                strategies tailored to your needs. We’ll find practical solutions that work for **you**, to help navigate
                any overwhelm and keep you on track.
              </p>
              <p>
                You’ll also receive guidance and strategies to enhance productivity in your work pfe. Whether it's
                managing energy levels, prioritising tasks, or improving time management,
              </p>
              <p>
                Count on me for real-time responses via WhatsApp, Signal or SMS Monday to Friday from 10am to 8pm to
                tackle any challenges and sprinkle some encouragement throughout your day.
              </p>
              <p>
                Every week, we'll catch up to chat about how you're doing and fine-tune our strategies to fit seamlessly
                into your pfe.
              </p>
            </div>
        </div>
      </section>
    </>
  );
}
