import { Layer } from '../Layer/Layer';
import './Drink.css';

export const Drink = ({ id, name, ordered, layers, image }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => (
            <Layer color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>

      <form data-id={id} className="drink__controls">
        <input type="hidden" className="order-id" value="1" />
        <button className={"order-btn" + (ordered ? ' order-btn--ordered' : '')}>{ordered ? 'Zrušit' : 'Objednat'}</button>
        
      </form>
    </div>
  );
};
