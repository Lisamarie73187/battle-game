import React, { FC, useState } from 'react';

interface ISourceCharacterProps {
    player: string
    character: string
    region: string
    image: string
}

const SourceCharacter: FC<ISourceCharacterProps> = ({player, character, region, image}) => {


  return (
    <div>
        <img 
          src={image} 
          alt={character}
        />
        <div className='playerInfoBoxWrapper'>
          <div><span>PlayerId:</span> {player}</div>
          <div><span>Characeter:</span> {character}</div>
        </div>
    </div>
  );
}

export default SourceCharacter;
