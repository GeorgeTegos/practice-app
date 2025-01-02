import harry from "../images/main-characters/Harry_Potter.jpg";
import hermione from "../images/main-characters/hermione-granger.jpg";
import ron from "../images/main-characters/ron-weasley.jpg";
import albus from "../images/main-characters/albus-dumbledore.jpg";
import severus from "../images/main-characters/severus-snape.jpg";

function MainCharImages() {
  const mainCharacters = [
    { name: "Harry Potter", image: harry },
    { name: "Hermione Granger", image: hermione },
    { name: "Ron Weasley", image: ron },
    { name: "Albus Dumbledore", image: albus },
    { name: "Severus Snape", image: severus },
  ];

  return (
    <div id="main-character-section">
      {mainCharacters.map((character) => {
        const alt = "image of " + character.name;
        return (
          <div id="main-char-wrapper">
            <h2>{character.name}</h2>
            <img className="main-char-img" src={character.image} alt={alt} />
          </div>
        );
      })}
    </div>
  );
}

export default MainCharImages;
