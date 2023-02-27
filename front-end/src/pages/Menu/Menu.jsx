import { MenuItem } from '../../components';
import food_category from '../../service/food_category';
import './Menu.css';
const Menu = () => {
  return (
    <>
      <div className="container">
        {food_category.map((category) => {
          return (
            <>
              <div className="menu-content">
                <h3 className="product-category">{category.title}</h3>
                <div className="row">
                  {category.food_items.map((item, index) => (
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                      <div className="product-card__item">
                        <MenuItem
                          name={item.name}
                          desc={item.desc}
                          image={item.image}
                          price={item.price}
                          index={index}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
