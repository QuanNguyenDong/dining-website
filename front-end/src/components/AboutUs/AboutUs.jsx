import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <section className="hero">
        <h1>About Us</h1>
      </section>
      <section className="content_section">
        <div className="content">
          <h2 className="content_section-inner-title">
            Lorem ipsum, dolor sit amet consectetur.
          </h2>
          <content>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, rem distinctio quaerat autem laborum facilis
              consequuntur, magni inventore architecto quos maiores incidunt
              culpa laudantium soluta libero. Quos, sequi reiciendis
              perspiciatis deserunt modi explicabo? Dolore facilis dolorem
              tempore impedit vitae asperiores autem in repellat eos
              voluptatibus distinctio sit, hic sequi laboriosam nisi libero
              exercitationem iste maxime omnis, magni blanditiis nostrum
              accusantium.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam error illum facere? Facilis voluptas beatae debitis,
              possimus minus minima vero numquam ad deserunt totam cum magnam
              voluptatum harum, odit necessitatibus, corrupti ipsam. Cum libero
              provident dolore in fugiat obcaecati, illum dolores nobis facilis,
              voluptas et quasi itaque quos nemo culpa qui iusto! Pariatur
              voluptas vero dicta veritatis ab earum rem?
            </p>
            <p>&nbsp</p>
          </content>
        </div>
      </section>
      <section className="images">
        <div className="images-inner">
          <img
            src="https://camposcoffee.com/wp-content/uploads/2016/09/kenya-tchakakani-campos-768x509.jpg"
            alt="Pho Nam Dinh 1"
            className="images-inner-image images-inner-image--top"
          />
          <img
            src="https://camposcoffee.com/wp-content/uploads/2016/09/campos-coffee-specialty-768x348.jpg"
            alt="Pho Nam Dinh 2"
            className="images-inner-image images-inner-image--bottom"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
