import axios, { AxiosResponse } from 'axios'
import { IKillFeedResponse } from '../types/IKillFeed'
import { mapKillFeedData } from './utils'

const api = {
    localHost: 'http://localhost:3001/api',
    webPt: 'http://interview.wptdev.com/api/killfeed'
}     

const retry = async(fn: () => Promise<AxiosResponse<IKillFeedResponse>>, retryTimes: number) => {

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

export const getKillFeed = async() =>  {
    const retryTimes = 5
    const getFeed = async() => {
        return await axios.get(api.localHost)
    }
  try {

    return retry(getFeed, retryTimes)

  } catch (error) {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
}




