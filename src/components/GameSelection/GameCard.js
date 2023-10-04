import React from 'react';
import { Link } from 'react-router-dom';

function GameCard({ name, logoUrl, onClick }) {
  return (
    <Link to="/MonsterTeamPlanner/PokemonSelection">
      <div className="game-card">
        <img src={logoUrl} alt={`${name} Logo`} />
      </div>
    </Link>
  );
}

export default GameCard;