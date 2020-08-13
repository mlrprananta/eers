import { Track, Artist, TopObject } from '../spotify/spotifyTypes'

type UserDTO = {
    id: number
    name: string
    tracks: Track[]
    artists: Artist[]
}

class User {
    id: number
    name: string
    top_tracks: TopObject<Track>
    top_artists: TopObject<Artist>

    constructor(id: number, name: string)
    constructor(
        id: number,
        name: string,
        top_tracks: TopObject<Track>,
        top_artists: TopObject<Artist>,
    )
    constructor(
        id?: number,
        name?: string,
        top_tracks?: TopObject<Track>,
        top_artists?: TopObject<Artist>,
    ) {
        this.id = id
        this.name = name
        this.top_tracks = top_tracks
        this.top_artists = top_artists
    }

    static toDTO(user: User): UserDTO {
        return {
            id: user.id,
            name: user.name,
            tracks: user.top_tracks.items,
            artists: user.top_artists.items,
        }
    }
}

export default User
