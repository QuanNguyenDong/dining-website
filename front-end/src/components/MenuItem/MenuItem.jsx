import './MenuItem.css';
import images from '../../constants/images';
const MenuItem = () => {
  return (
    <>
      <h1>MenuItem</h1>
      <div style={{width: '300px'}}>
        <a href="#!" className="product-card">
          <div className="product-card__image">
            <img
              src="https://camposcoffee.com/wp-content/uploads/2018/11/500G_Front_SUPERIOR-300x300.png"
              alt="Pho-Nam-Dinh"
            />
          </div>
          <div className="product-card__content">
            <h2 className="product-card__content__title">Rice paper rolls</h2>
            <span className="product-card__content__price">10$</span>
          </div>
        </a>
      </div>
      <div style={{width: '300px', marginLeft: '50px'}}>
        <a href="#!" className="product-card">
          <div className="product-card__image">
            <img
              src={images.rareBeefPho}
              alt="Pho-Nam-Dinh"
            />
          </div>
          <div className="product-card__content">
            <h2 className="product-card__content__title">Rice paper rolls</h2>
            <span className="product-card__content__price">10$</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default MenuItem;
