import Accueil from "../components/accueil";
import Therapie from "../components/therapie";
import Tarifs from "../components/Tarifs";
import Temoignages from "../components/temoignages";
import Sendmail from "../components/sendmail";

const Home = () => {
  return (
    <div className="overflow">
      <Accueil />
      <Therapie />
      <Tarifs />
      <Temoignages />
      <Sendmail />
    </div>
  );
};

export default Home;
