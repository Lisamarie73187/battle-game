import React  from 'react';
import HealthBar from './HealthBar';

interface ICharacterProps {
    player: string
    character: string
    region?: string
    image: string
}

const Character: React.FC<ICharacterProps> = ({player, character, image}) => {


  return (
    <div>
        <HealthBar/>
        <img 
          src={image} 
          alt={character}
        />
        <div className='playerInfoBoxWrapper'>
          <h3><span>PlayerId:</span> {player}</h3>
          <h3><span>Characeter:</span> {character}</h3>
        </div>
    </div>
  );
}

export default Character;
