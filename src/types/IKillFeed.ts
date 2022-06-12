export interface IKillFeedResponse {
    status: string
    reason: string
    payload: IKillFeed[]
  }
  
  export interface IKillFeed {
    platform: string
    region: string
    source_player_id: string
    source_character: string
    source_character_image: string
    target_player_id: string
    target_character: string
    target_character_image: string
    method: string
    damage: number
  }