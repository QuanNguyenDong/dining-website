import './MenuItem.css';
const MenuItem = ({name, desc, image, price, index}) => {
  return (
    <>
        <a href="#!" className="product-card" >
          <div className="product-card__image">
            <img
              src={image || `https://picsum.photos/300/300?random=${index}`}
              alt="Pho-Nam-Dinh"
            />
          </div>
        </a>
        <div className="product-card__content">
          <div>
            <span className="product-card__content__title">{name}</span>
            <span className="product-card__content__desc">{desc}</span>
          </div>
          <span className="product-card__content__price">${price}</span>
        </div>
    </>
  );
};

export default MenuItem;
