import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Gallery } from "../components/Gallery/Gallery";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <header>
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <section className="banner">
        <div className="container">
          <div className="banner__content">
            <h1>Přijď to ochutnat!</h1>
            <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.</p>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/espresso.png" />
                </div>
                <div className="drink__info">
                  <h3>Espresso</h3>
                  <div className="layer">
                    <div
                      className="layer__color"
                      style={{ backgroundColor: "#613916" }}
                    ></div>
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="0" />
                <button className="order-btn">Objednat</button>
              </form>
            </div>

            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/doppio.png" />
                </div>
                <div className="drink__info">
                  <h3>Doppio</h3>
                  <div className="layer">
                    <div
                      className="layer__color"
                      style={{ backgroundColor: "#613916" }}
                    />
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="1" />
                <button className="order-btn">Objednat</button>
              </form>
            </div>

            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/lungo.png" />
                </div>
                <div className="drink__info">
                  <h3>Lungo</h3>
                  <div className="layer">
                    <div
                      className="layer__color"
                      style={{ backgroundColor: "#b0dee1" }}
                    />
                    <div className="layer__label">voda</div>
                  </div>
                  <div className="layer">
                    <div
                      className="layer__color"
                      style={{ backgroundColor: "#613916" }}
                    />
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="2" />
                <button className="order-btn">Objednat</button>
              </form>
            </div>
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>

      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);
