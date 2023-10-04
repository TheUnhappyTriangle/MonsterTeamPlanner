import React from 'react';
import GameCard from './GameCard';
import GameInfo from '../../assets/Data/Game_Info.json';

function GameSelection({ selectedGame, setSelectedGame }) {
  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div className="container-fluid">
        {GameInfo.map((generationGames, index) => (
            <div className="row justify-content-center align-items-center g-2" key={index}>
                <h2>{index === 0 ? 'National' : `Generation ${index}`}</h2>
                        {generationGames.map((game, gameIndex) => (
                            <div className="col-3" key={gameIndex}>
                                <GameCard
                                    name={game.name}
                                    logoUrl={game.logoUrl} // Provide the URL to the logo image
                                    onClick={() => handleGameChange(game.name)}
                                />
                            </div>
                        ))}
            </div>
        ))}
    </div>
  );
}

export default GameSelection;