import profil from "../images/profil.webp";

const Accueil = () => {
  return (
    <div id="accueil" className="home-container">
      <div className="profil-container">
        <img src={profil} alt="photo de profil" />
      </div>
      <div className="accueil-container">
        <div className="accueil-box">
          <h1>Karine</h1>
          <h1>Raspail</h1>
          <div className="accueil-subtitle">Thérapeute en psychogénéalogie</div>
          <div className="accueil-text">
            Les traumatismes, les secrets et les conflits vécus par vos
            ascendants conditionnent encore votre vie et celle de vos enfants.
            Il est encore temps de revisiter votre histoire familiale par une
            séance de psychogénéalogie brève pour découvrir vos liens ancestraux
            et identifier les problématiques familiales qui ont traversé le
            temps en attente de réparation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
