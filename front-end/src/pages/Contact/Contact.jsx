import './Contact.css';
// import SimpleMap from '../components/Map/Map';
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="banner-content-panel">
          <div className="banner-content">
            <h1>Contact us</h1>
            <p>
              <strong>Location:</strong> 148 Norton St, Leichhardt
            </p>
            <p>
              <strong>Opening Hours:</strong> Monday to Sunday - 10AM to 9PM
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:0280840489">0280 840 489</a>
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
      </div>
    </>
  );
};

export default Contact;
