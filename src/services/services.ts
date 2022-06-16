import axios, { AxiosResponse } from 'axios'
import { IKillFeed, IKillFeedMappedResponse, IKillFeedResponse } from '../types/IKillFeed'
import { mapKillFeedData } from '../utils'

const port = 'http://localhost:3001'

let killFeedResponseArr: IKillFeed[] = []


const retry = async(fn: () => Promise<AxiosResponse<IKillFeedResponse>>, retryTimes: number) => {
    try {
        const { data } = await fn()
        if(data?.status === 'successful' && data.payload.length){
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

export const getKillFeed = async() =>  {
    const retryTimes = 5
    const getFeed = async() => {
        // return await axios.get('http://interview.wptdev.com/api/killfeed')
        return await axios.get(`${port}/getKillFeed`)
    }
  try {

    const killFeedResponse =  await retry(getFeed, retryTimes)
    killFeedResponseArr.push(killFeedResponse)
    return { killFeedResponse, killFeedResponseArr }

  } catch (error) {
    console.log('unexpected error in getKillFeed: ', error);
  }
}

export const startNewGameService = async() =>  {
  try {
    killFeedResponseArr = []
  } catch (error) {
    console.log('unexpected error in start new game: ', error);
  }
}






