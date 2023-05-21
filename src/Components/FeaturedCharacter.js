import React from "react";
import luffyImage from '../images/luffy.png';
import zoroImage from '../images/zoro.png';

const favoriteCharacters = [
  {
    name: "Monkey D. Luffy",
    description:
      "Optimistic and generally good-hearted, he is not as dimwitted as many believe him to be, and he often demonstrates more understanding than the other characters expect. Knowing the danger ahead, Luffy is willing to risk his life to become King of the Pirates and protect his crew.",
    image: luffyImage,
    link: "/characters/luffy",
  },
  {
    name: "Roronoa Zoro",
    description:
      "Zoro has a severe, distant, and distant nature, yet because of his impatience and short temper, Zoro frequently reacts in a ridiculous and exaggerated humorous style. He typically does either weight training or sleeping on the ship. Wants to be the world's best swordsman.",
    image: zoroImage ,
    link: "/characters/zoro",
  },
  // Add more favorite characters here
];

const FeaturedCharacters = () => {
  return (
    <div className="featured-characters">
      {favoriteCharacters.map((character, index) => (
        <div className="featured-character" key={index}>
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
          />
          <h3 className="character-name">{character.name}</h3>
          <p className="character-description">{character.description}</p>
          <a href={character.link} className="learn-more-link">
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCharacters;
