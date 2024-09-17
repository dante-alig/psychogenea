import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sendmail = () => {
  return (
    <div className="sendmail">
      <button>
        <a href="mailto:example@example.com?subject=Demande%20d'information&body=Bonjour,%20j'aimerais%20en%20savoir%20plus%20sur...">
          <FontAwesomeIcon
            icon="fa-solid fa-paper-plane"
            className="fa-paper-plane"
          />
          Envoyer un mail
        </a>
      </button>
    </div>
  );
};

export default Sendmail;
