import Daria from '../assets/Daria-coffee.jpg';

export default function About() {
  return (
    <>
      <section id="about">
        <div className="content-wrapper">
          <img src={Daria} alt="daria-photo" />
          <p className="about-me">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus maxime dolorum voluptate! In odio esse
            perspiciatis neque, animi minima expedita optio nulla minus ipsa rem a dignissimos error officia itaque?
          </p>
        </div>
      </section>
    </>
  );
}
