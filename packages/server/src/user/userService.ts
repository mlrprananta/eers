import * as model from './userData'
import User from './user'
import * as spotify from '../spotify/spotifyController'

export async function createUserProfile(authHeader: string): Promise<void> {
    const profile = await spotify.getProfile(authHeader)
    const id = parseInt(profile.id)
    const name = profile.display_name
    await model.createUser(new User(id, name))
}

export async function updateUserProfile(authHeader: string): Promise<User> {
    const profile = await spotify.getProfile(authHeader)
    const id = parseInt(profile.id)
    const user = (await model.readUser(id))[0]
    const tracks = await spotify.getTopTracks(authHeader, 50, 'short_term')
    const artists = await spotify.getTopArtists(authHeader, 10, 'medium_term')
    user.top_artists = artists
    user.top_tracks = tracks
    return (await model.updateUser(user))[0]
}

export const getProfile = async (authHeader: string): Promise<User> => {
    const profile = await spotify.getProfile(authHeader)
    const id = parseInt(profile.id)
    const user = (await model.readUser(id))[0]
    return user
}

export const getUserProfile = async (id: number): Promise<User> => {
    const user = (await model.readUser(id))[0]
    return user
}