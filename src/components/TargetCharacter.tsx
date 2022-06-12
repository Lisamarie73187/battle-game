import React, { FC } from 'react';

interface ITargetCharacterProps {
    player: string
    character: string
    image: string
}

const TargetCharacter: FC<ITargetCharacterProps> = ({player, character, image}) => {


  return (
    <div>
        <img 
          src={image} 
          alt={character}
        />
        {player}
        {character}
    </div>
  );
}

export default TargetCharacter;
