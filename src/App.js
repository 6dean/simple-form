import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [infos, setInfos] = useState(false);

  return (
    <div className="formulaire">
      <div className="App">
        <header>
          <p>create Account </p>
        </header>
        {infos === false ? (
          <div>
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
              <button
                onClick={() => {
                  if (password !== confirmPass) {
                    alert(`Password is not the same`);
                  } else if (name === "" || email === "") {
                    alert(`Info needed`);
                  } else {
                    setInfos(true);
                  }
                }}
              >
                envoyez
              </button>
            </div>
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
}

export default App;
