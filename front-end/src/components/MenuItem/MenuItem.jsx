import './MenuItem.css';
const MenuItem = ({name, desc, image, price, index}) => {
  return (
    <>
        <span style={{backgroundImage: `url(${image})`}} className="product-card__img">
        </span>
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
