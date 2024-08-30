import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tarifs = () => {
  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/k-raspail971/60min",
    });
    return false;
  };

  return (
    <div id="tarif" className="tarifs-container">
      <div className="tarifs-price">
        <div className="tarif-presentation">
          <h4>Presentation</h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quas
            expedita mollitia voluptatem explicabo porro.
          </div>
        </div>
        <div className="price1">
          <h4>
            <FontAwesomeIcon
              icon="fa-brands fa-pagelines"
              className="pagelines"
            />
            Découverte
          </h4>
          <div className="price-number">
            90€<span> / 1 séance</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quas
            expedita mollitia voluptatem explicabo porro.
          </div>
          <button onClick={handleClick}>Consultation</button>
        </div>
        <div className="price2">
          <h4>
            <FontAwesomeIcon
              icon="fa-brands fa-pagelines"
              className="pagelines2"
            />
            Thérapie
          </h4>
          <div className="price-number">
            250€<span> / 3 séances</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quas
            expedita mollitia voluptatem explicabo porro.
          </div>
          <button onClick={handleClick}>Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
