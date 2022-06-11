import React, { FC, useState } from 'react';
import { getKillFeed } from '../services';
import { IKillFeed } from '../types/IKillFeed';
import MainCharacter from './MainCharacter';

const MainPage: FC = () => {
    const [killFeed, setKillFeed ] = useState<IKillFeed | null>(null)
  

  const getFeed = async() => {
    const resp = await getKillFeed()
    setKillFeed(resp)
  }
  console.log({killFeed})

  return (
    <div>
        {killFeed &&
            <MainCharacter killFeed={killFeed}/>
        }
     <button onClick={getFeed}>get feed</button>
    </div>
  );
}

export default MainPage;
