import { Link } from "react-router-dom";

const Entete = () => {
  return (
    <header>
      <nav>
        <h1>Kasa</h1>
        <div className="link-nav">
          <p>
            <Link to="/">Accueil</Link>
          </p>
          <p>
            <Link to="/about">A propos</Link>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Entete;
