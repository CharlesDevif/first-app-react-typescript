import Card from "../components/card";
import locations from "../api/kasa.json";

export function Home() {
  return (
    <div className="page-home">
      <div
        className="headerPageText"
        style={{ backgroundImage: `url(/src/assets/IMG.png)` }}
      >
        <div>
          <h1>Chez vous,partout ailleurs</h1>
        </div>
      </div>

      <div className="conteneurCard">
        {locations.map((location) => (
          <Card location={location} key={location.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
