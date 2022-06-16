import characterImages from '../assets/images'
import { IKillFeed } from '../types/IKillFeed'

export const mapKillFeedData = (data: IKillFeed) => {
    const sourceCharacterImage = characterImages.find(character => character.name === data.source_character)
    const targetCharacterImage = characterImages.find(character => character.name === data.target_character)

    return {
        platform: data?.platform,
        region: data?.region,
        source_player_id: data?.source_player_id,
        source_character: data?.source_character,
        source_character_image: sourceCharacterImage?.imgURL,
        target_player_id: data?.target_player_id,
        target_character: data?.target_character,
        target_character_image: targetCharacterImage?.imgURL,  
        method: data?.method,
        damage: data?.damage
    }
}