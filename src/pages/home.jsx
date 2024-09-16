import Accueil from "../components/accueil";
import Therapie from "../components/therapie";
import Tarifs from "../components/Tarifs";
import Temoignages from "../components/temoignages";

const Home = () => {
  return (
    <div className="overflow">
      <Accueil />
      <Therapie />
      <Tarifs />
      <Temoignages />
    </div>
  );
};

export default Home;
