import React, { FC, useState, Fragment } from 'react';
import { getKillFeed } from '../services';
import { IKillFeed } from '../types/IKillFeed';
import Character from './Character';

const MainPage: FC = () => {
    const [hasGameStarter, setHasGameStarted] = useState(false)
    const [killFeed, setKillFeed ] = useState<IKillFeed | null>(null)
  

  const getFeed = async() => {
    const resp = await getKillFeed()
    setKillFeed(resp)
  }

  const startGame = () => {
      setHasGameStarted(true)
      getFeed()
  }

  return (
    <Fragment>
        {hasGameStarter ? (
            <div>
                {killFeed &&
                <div>
                    <div className='battleFieldWrapper'>
                        <Character 
                            player={killFeed.source_player_id}
                            character={killFeed.source_character}
                            image={killFeed.source_character_image}
                        />
                         <Character 
                            player={killFeed.target_player_id}
                            character={killFeed.target_character}
                            image={killFeed.target_character_image}
                        />
                    </div>
                    <div>
                        <div className='battleButtonWrapper'>
                            <button>Battle</button>
                        </div>
                        <div className='battleAgainButtonWrapper'>
                            <button onClick={getFeed}>Battle Again</button>
                        </div>
                        <div className='battleAgainButtonWrapper'>
                            <button onClick={getFeed}>Start New Game</button>
                        </div>
                    </div>
                </div>
                }
            </div>
        ): (
            <div className='startGameWrapper'>
                <button 
                    onClick={startGame}
                >
                    Let's Play!
                </button>
            </div>
        )}
    
    </Fragment>
  );
}

export default MainPage;
