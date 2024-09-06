import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src="https://unavatar.io/twitter/kikobeats"
            alt="Avatar de Kikobeats"
          />
          <div className="tw-followCard-info">
            <strong>Kiko Bejarano</strong>
            <span>@kikobeats</span>
          </div>
        </header>
        <aside>
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>
    </>
  );
}

export default App;
