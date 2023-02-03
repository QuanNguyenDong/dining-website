import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <section className="hero" style={{backgroundImage: `url(${images.pndBanner})`}}>
      </section>
      
      <section className="content_section">
        <div className="content">
          <h2 className="content_section-inner-title">
          From Pho Nam Dinh Leichhardt
          </h2>
          <div>
            <p>
            We specialize in cooking on Nam Dinh pho, where the main origin of pho begins. We also welcome you to enjoy Vietnamese cuisine. In addition, we also have alcohol for use at the restaurant.
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
          </div>
        </div>
      </section>
      <section className="wrapper">
        {/* <div className="images-inner">
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
        </div> */}
        <div className="comment">
          <p>
            We specialize in cooking on Nam Dinh pho, where the main origin of pho begins. We also welcome you to enjoy Vietnamese cuisine. In addition, we also have alcohol for use at the restaurant
          </p>
        </div>
        <div className="wineBackground">
          <img src={images.wineImage} alt="" />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
