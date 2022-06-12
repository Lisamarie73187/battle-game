import axios, { AxiosResponse } from 'axios'
import characterImages from './assets/images'
import { IKillFeed } from './types/IKillFeed'

const retry = async(fn: () => Promise<AxiosResponse>, retryTimes: number) => {

    try {
        const { data } = await fn()
        if(data?.status === 'successful'){
            return mapKillFeedData(data.payload[0])
        } else {
            if (retryTimes === 1) {
                return 'unsuccessful, please try again'
            }
            console.log('retrying', retryTimes, 'time');
            return retry(fn, retryTimes - 1);
        }
    } catch(e){
        return retry(fn, retryTimes - 1);
    }
}

const mapKillFeedData = (data: IKillFeed) => {
    const sourceCharacterImage = characterImages.find(character => character.name === data.source_character)
    const targetCharacterImage = characterImages.find(character => character.name === data.target_character)

    return {
        platform: "pc",
        region: "us",
        source_player_id: data.source_player_id,
        source_character: data.source_character,
        source_character_image: sourceCharacterImage?.imgURL,
        target_player_id: data.target_player_id,
        target_character: data.target_character,
        target_character_image: targetCharacterImage?.imgURL,  
        method: "Cryo-Freeze",
        damage: 13
    }
}

export const getKillFeed = async() =>  {
    const retryTimes = 5
    const getFeed = async() => {
        // return await axios.get('http://interview.wptdev.com/api/killfeed')
        return await axios.get('http://localhost:3001/api')
    }
  try {

    return retry(getFeed, retryTimes)

  } catch (error) {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
}




