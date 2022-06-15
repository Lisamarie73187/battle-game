import React, { FC } from 'react';
import { IBattleFeed } from '../types/IBattleFeed';
import HealthBar from './HealthBar';

interface ICharacterProps {
    player: string
    character: string
    region?: string
    image: string
    battleFeed?: IBattleFeed[]
}

const Character: FC<ICharacterProps> = ({player, character, image, battleFeed}) => {
  const characterDamage = battleFeed?.find(battle => battle.targetCharacter === character)
  console.log({characterDamage})
  return (
    <div>
        <HealthBar damage={characterDamage?.damage}/>
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
