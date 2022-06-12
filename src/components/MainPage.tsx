import React, { FC, useState, Fragment } from 'react';
import { battlePlayer, getKillFeed, startNewGame } from '../services';
import { IBattleFeed } from '../types/IBattleFeed';
import { IKillFeed } from '../types/IKillFeed';
import Character from './Character';

const MainPage: FC = () => {
    const [hasGameStarter, setHasGameStarted] = useState(false)
    const [killFeed, setKillFeed ] = useState<IKillFeed | null>(null)
    const [battleFeed, setBattleFeed] = useState<IBattleFeed[] | []>([])
  

  const getFeed = async() => {
    const resp = await getKillFeed()
    setKillFeed(resp)
  }

  const startGame = () => {
      setHasGameStarted(true)
      getFeed()
  }

  const battle = async() => {
      const battleResp = await battlePlayer(
          {
            damage: killFeed?.damage, 
            method: killFeed?.method,
            targetPlayer: killFeed?.target_player_id,
            targetCharacter: killFeed?.target_character
        })
      setBattleFeed(battleResp)
  }

  const clearBattle = async() => {
      const clearBattleResponse = await startNewGame()
      setBattleFeed(clearBattleResponse)
  }

  console.log(battleFeed)

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
                            <button onClick={battle}>Battle</button>
                        </div>
                        <div className='battleAgainButtonWrapper'>
                            <button onClick={getFeed}>Battle Again</button>
                        </div>
                        <div className='battleAgainButtonWrapper'>
                            <button onClick={clearBattle}>Start New Game</button>
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
