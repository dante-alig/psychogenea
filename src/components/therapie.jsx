import remember from "../images/remember.jpg";
import forefather from "../images/old_pic.jpg";
import call from "../videos/call.mp4";

const Therapie = () => {
  return (
    <>
      {" "}
      <div className="therapie-container">
        <div className="therapie-hook">
          Vivez-vous vraiment selon vos propres choix et croyances, ou bien
          ressentez-vous parfois l’influence invisible et incontrôlable de votre
          héritage familial?
        </div>
        <div className="therapie-texte">
          Et si votre passé familial avait encore des répercussions sur votre
          vie actuelle? Les événements, traumatismes, secrets et conflits vécus
          par vos ancêtres continuent peut-être de façonner votre existence et
          celle de vos enfants, de manière insoupçonnée.
        </div>
      </div>
      <div className="therapie2-container">
        <div className="therapie2-visuel">
          <img src={remember} alt="photo de famille" />
        </div>
        <div className="therapie2-texte">
          Il est temps de reprendre le contrôle. Grâce à une séance de
          psychogénéalogie, plongeons ensemble dans l’histoire de votre famille
          pour explorer les liens cachés et identifier les problématiques non
          résolues qui traversent les générations, en attente de guérison.
        </div>
      </div>
      <div className="therapie3-container">
        <div className="therapie3-box">
          <div>
            <img src={forefather} alt="photo de famille" />
          </div>
          <h2>
            Ensemble, créons l’arbre généalogique de votre lignée, en remontant
            sur trois générations.
          </h2>
          <div className="therapie3-subtitle">
            Nous mettrons en lumière les schémas familiaux qui vous empêchent de
            vivre pleinement votre authenticité.
          </div>
        </div>
      </div>
      <div className="therapie4">
        <div className="therapie4-container-left">
          <div className="therapie4-text">
            <h3>Déroulement des séances</h3>
            <ul>
              <li>
                Chaque séance de thérapie transgénérationnelle se déroule par le
                biais de whatsapp vidéo à l’heure convenu du rendez-vous et dure
                une heure.
              </li>
              <li>
                Les séances seront consacrées à un dialogue approfondi autour de
                votre problématique actuelle, de votre histoire personnelle et
                des liens ancestraux identifiés dans l’arbre. Il s’agira de
                mettre en lumière les loyautés, les croyances familiales ainsi
                que les schémas transgénérationnels qui vous empêchent de vivre
                pleinement votre individualité.
              </li>
              <li>
                Une rupture de liens et/ou une réparation vous sera proposée par
                le biais d’actes symboliques basés sur l’écriture.
              </li>
              <li>
                Puis un mois plus tard la dernière séance a lieu afin d’évaluer
                les changements survenus et d’aborder d’éventuels problématiques
                persistantes. C’est la retranscription complète du texte que
                vous avez partagé.
              </li>
            </ul>
          </div>
        </div>
        <div className="therapie4-container-right">
          <div className="video-container">
            <video width="100%" controls autoPlay muted loop>
              <source src={call} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Therapie;
