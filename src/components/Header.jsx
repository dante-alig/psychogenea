const Header = () => {
  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/samuelceleste/30min",
    });
    return false;
  };
  return (
    <div className="header-container">
      <div className="logo">Karine Raspail</div>
      <div className="menu">
        <div>Accueil</div>
        <div>Therapie</div>
        <div>Tarif</div>
        <div>contact</div>
        <div className="booking" onClick={handleClick}>
          Consultation
        </div>
      </div>
    </div>
  );
};

export default Header;
