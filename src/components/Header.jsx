import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/k-raspail971/60min",
    });
    return false;
  };

  return (
    <div className="header-container">
      <div className="logo">Karine Raspail</div>
      <div className="menu">
        <Link to="#accueil" className="hidden-menu">
          Accueil
        </Link>
        <Link to="#therapie">Thérapie</Link>
        <Link to="#methode">Méthode</Link>
        <Link to="#tarif">Tarif</Link>
        <div className="hidden-menu">
          <a href="mailto:example@example.com?subject=Demande%20d'information&body=Bonjour,%20j'aimerais%20en%20savoir%20plus%20sur...">
            Contact
          </a>
        </div>

        <div className="booking" onClick={handleClick}>
          Consultation
        </div>
      </div>
    </div>
  );
};

export default Header;
