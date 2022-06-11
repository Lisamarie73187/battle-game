import React, { FC, useState } from 'react';
import { IKillFeed } from '../types/IKillFeed';

interface IMainCharacterProps {
    killFeed: IKillFeed | null
}

const MainCharacter: FC<IMainCharacterProps> = ({killFeed}) => {


  return (
    <div>
        {killFeed?.source_player_id}
        {killFeed?.source_character}
        {killFeed?.region}

    </div>
  );
}

export default MainCharacter;
