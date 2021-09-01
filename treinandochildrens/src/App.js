import "./App.css";
import CenteredCard from "./components/CenteredCard";

function App() {
  const players = [
    {
      score: 754,
      name: "Diego Costa",
      imageSrc:
        "https://cdn.folhape.com.br/upload/dn_arquivo/2021/08/diego.jpg",
      age: 32,
      position: "Centroavante",
      goals: 191,
    },
    {
      score: 947,
      name: "Hulk",
      imageSrc:
        "https://www.hojeemdia.com.br/polopoly_fs/1.836762!/image/image.jpg_gen/derivatives/landscape_490/image.jpg",
      age: 35,
      position: "Centroavante",
      goals: 375,
    },
    {
      score: 929,
      name: "Nacho",
      imageSrc:
        "https://www.otempo.com.br/image/contentid/policy:1.2508243:1625520107/WhatsApp%20Image%202021-07-04%20at%2020.00.13.jpeg?f=new-layout-article-photo-gallery-fit_930&w=1200&$p$f$w=8800679",
      age: 31,
      position: "Meia",
      goals: 52,
    },
  ];
  return (
    <div className="App">
      <div className="cardContainer">
        {players.map((player) => {
          return (
            <CenteredCard>
              <h2 className="playerName">{player.name}</h2>
              <p className="playerScore">Score: {player.score}</p>

              <img
                src={player.imageSrc}
                alt={player.name}
                className="playerImage"
              ></img>

              <ul className="playerStats">
                <li className="playerStatsItem">
                  <p className="playerAge">Idade: {player.age}</p>
                </li>

                <li className="playerStatsItem">
                  <p className="playerPosition">Posição: {player.position}</p>
                </li>

                <li className="playerStatsItem">
                  <p className="playerGoals">Gols: {player.goals}</p>
                </li>
              </ul>
            </CenteredCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;
