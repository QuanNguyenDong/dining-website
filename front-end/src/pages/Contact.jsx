import './Contact.css';
// import SimpleMap from '../components/Map/Map';
const Contact = () => {
  return (
    <>
      <div className="banner-content-panel grid wide">
        <div className="banner-content">
          <h1>Contact us</h1>
          <p>
            <strong>
              <u>Location:</u>
            </strong>{' '}
            Norton Street, Leichhardt
          </p>
          <p>
            <strong>
              <u>Opening Hours:</u>
            </strong>{' '}
            Monday to Sunday - 10AM to 9PM
          </p>
          <p>
            <strong>
              <u>Phone:</u>
            </strong>{' '}
            <a href="tel:0123 123 123">0123 123 123</a>
          </p>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=pho%20nam%20dinh,%20norton%20street&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="Pho Nam Dinh"
          frameborder="0"
          scrolling="no"
          width="100%"
          height="500px"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
