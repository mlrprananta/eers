import { query } from '../db/index'
import User from './user'
import { TopObject, Track, Artist } from '../spotify/spotifyTypes'

export type UserRow = {
    user_id: number
    name: string
    top_tracks: TopObject<Track>
    top_artists: TopObject<Artist>
}

export function createUser(user: User): Promise<User[]> {
    return query<User>(
        'INSERT INTO users (id, name) VALUES($1, $2) ON CONFLICT DO NOTHING',
        [user.id, user.name],
    )
}

export function readUser(id: number): Promise<User[]> {
    return query<User>('SELECT * FROM users WHERE id = $1', [id])
}

export function updateUser(user: User): Promise<User[]> {
    return query<User>(
        'UPDATE users SET top_tracks = $2, top_artists = $3 WHERE id = $1 RETURNING *',
        [user.id, user.top_tracks, user.top_artists],
    )
}
