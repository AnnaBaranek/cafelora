import { Drink } from '../Drinks/Drink';
import './Menu.css';

export const Menu = ({ drinks }) => {
  return (
    <section className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.map((item) => (
            <Drink
              id={item.id}
              name={item.name}
              image={`http://localhost:4000${item.image}`}
              ordered={item.ordered}
              layers={item.layers}
            />
          ))}
        </div>
        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
