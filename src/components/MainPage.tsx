import React, { useState, Fragment } from 'react';
import { getKillFeed } from '../services/services';
import { IKillFeed, IKillFeedWithImages } from '../types/IKillFeed';
import Character from './Character';
import Modal from './Modal';

const MainPage: React.FC = () => {
    const [hasGameStarter, setHasGameStarted] = useState(false)
    const [killFeed, setKillFeed ] = useState<IKillFeedWithImages | null>(null)
    const [isBattleModalShowing, setIsBattleModalShowing] = useState(false)

  const getFeed = async() => {
    const resp = await getKillFeed()
    setKillFeed(resp)
  }

  const startGame = () => {
      setHasGameStarted(true)
      getFeed()
  }

  const playNewCharacterFromModal = () => {
    getFeed()
    setIsBattleModalShowing(false)
}

  return (
    <Fragment>
        {hasGameStarter ? (
            <div>
                {!!killFeed &&
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
                                <button onClick={() => setIsBattleModalShowing(true)}>Battle</button>
                            </div>
                            <div className='battleAgainButtonWrapper'>
                                <button onClick={getFeed}>Battle New Again</button>
                            </div>
                            <div className='battleAgainButtonWrapper'>
                                <button onClick={() => setHasGameStarted(false)}>Start New Game</button>
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
         <Modal 
            isOpen={isBattleModalShowing}
            close={() => setIsBattleModalShowing(false)}
            title={'Battle Results'}
        >
            <div className='resultsWrapper'>
                <div>
                    Damage: {killFeed?.damage}
                </div>
                <div>
                    Method: {killFeed?.method}
                </div>
                <div className='modalButtonWraper'>
                    <button onClick={playNewCharacterFromModal}>Battle New Character</button>
                </div>
            </div>
        </Modal>
    
    </Fragment>
  );
}

export default MainPage;
