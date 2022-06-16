import React, { FC } from 'react';
import HealthBar from './HealthBar';

interface ICharacterProps {
    player: string
    character: string
    region?: string
    image: string
}

const Character: FC<ICharacterProps> = ({player, character, image}) => {


  return (
    <div>
        <img 
          src={image} 
          alt={character}
        />
        <HealthBar/>
        <div className='playerInfoBoxWrapper'>
          <h3><span>PlayerId:</span> {player}</h3>
          <h3><span>Characeter:</span> {character}</h3>
        </div>
    </div>
  );
}

export default Character;
