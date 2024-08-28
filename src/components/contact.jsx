import { useState } from "react"; // N'oubliez pas d'importer useState

const Contact = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="contact-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (email && text) {
            // Correction des variables vérifiées
            console.log("ok");
          } else {
            alert("vous devez remplir tous les champs"); // Correction du texte
          }
        }}
      >
        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            id="text"
            name="text"
            value={text}
            rows="10"
            cols="50"
            placeholder="Posez-moi une question ici..." // Correction du texte
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
        <button type="submit">Valider</button>{" "}
      </form>
    </div>
  );
};

export default Contact;
