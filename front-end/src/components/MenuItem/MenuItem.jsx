import './MenuItem.css';
// import images from '../../constants/images';
const MenuItem = ({name, price, index}) => {
  return (
    <>
        <a href="#!" className="product-card">
          <div className="product-card__image">
            <img
              src={`https://picsum.photos/300/300?random=${index}`}
              alt="Pho-Nam-Dinh"
            />
          </div>
          <div className="product-card__content">
            <h2 className="product-card__content__title">{name}</h2>
            <span className="product-card__content__price">{price}$</span>
          </div>
        </a>
      {/* <div style={{width: '300px'}}>
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
      </div> */}
    </>
  );
};

export default MenuItem;
