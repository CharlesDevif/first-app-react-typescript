import MenuDeroulant from "../components/menuDeroulant";

export interface AboutProps {}

export function About() {
  return (
    <div>
      <div
        className="headerPageText"
        style={{ backgroundImage: `url(/src/assets/img2.png)` }}
      ></div>
      <div className="conteneur-faq">
        <MenuDeroulant
          title="Fiabilité"
          description="Kusa, c'est l'assurance d'une expérience de location immobilière fiable. Notre plateforme utilise des protocoles de sécurité avancés pour protéger vos données et garantir des transactions en toute confiance."
          list={[]}
        ></MenuDeroulant>
        <MenuDeroulant
          title="Respect"
          description="La bienveillance fais partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
          list={[]}
        ></MenuDeroulant>
        <MenuDeroulant
          title="Service"
          description="Chez Kusa, nous comprenons l'importance d'une location sans soucis. C'est pourquoi nous offrons un support client réactif et des processus de location clairs, vous permettant de louer en toute confiance."
          list={[]}
        ></MenuDeroulant>
        <MenuDeroulant
          title="Responsabilité"
          description="Nous sommes fiers de notre approche responsable envers la communauté et l'environnement. Chez Kusa, nous encourageons activement des pratiques durables et des locations éthiques, soutenant ainsi un mode de vie responsable."
          list={[]}
        ></MenuDeroulant>
      </div>
    </div>
  );
}

export default About;
