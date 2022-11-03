import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [infos, setInfos] = useState(false);

  return (
    <div className="App">
      <header>
        <p>create Account </p>
      </header>
      <div className={infos === true && "undisplay"}>
        <div>
          <input
            onChange={(name) => setName(name.target.value)}
            type="text"
            placeholder="Jean Dupont"
            name="name"
            value={name}
          />
        </div>
        <div>
          <input
            onChange={(elem) => setEmail(elem.target.value)}
            type="email"
            placeholder="jeandupont@lereacteur.io"
            name="email"
            value={email}
          />
        </div>
        <div>
          <input
            onChange={(elem) => setPassword(elem.target.value)}
            type="password"
            placeholder="lErAcTeUr2022"
            name="password"
            value={password}
          />
        </div>
        <div>
          <input
            onChange={(elem) => setConfirmPass(elem.target.value)}
            type="password"
            placeholder="lErAcTeUr2022"
            name="confirm password"
            value={confirmPass}
          />
        </div>
        <div>
          <input
            type="submit"
            onSubmit={(event) => {
              event.preventdefault();
              if (password !== confirmPass) {
                <alert>"Votre mot de passe n'est pas identique"</alert>;
              } else {
              }
            }}
            onClick={() => {
              setInfos(true);
            }}
          />
        </div>
      </div>
      <div className={infos === true ? "display" : "undisplay"}>
        <div>name:{name}</div>
        <div>email:{email}</div>
        <div>password:{password}</div>
        <button
          onClick={() => {
            setInfos(false);
          }}
        >
          EDITER
        </button>
      </div>
    </div>
  );
}

export default App;
