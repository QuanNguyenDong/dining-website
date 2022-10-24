import { MenuItem } from '../components';
import food_category from './food_category';
import './Menu.css';
const Menu = () => {
  return (
    <>
      {food_category.map((category) => {
        return (
          <>
            <h1 className="product-category">{category.title}</h1>
            <div className="row">
              {category.food_items.map((item, index) => (
                <div className="col l-3 product-card__item">
                  <MenuItem name={item.name} price={item.price} index={index}/>
                </div>
              ))}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Menu;
