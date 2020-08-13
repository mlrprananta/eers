import axios, { AxiosError } from 'axios'

import * as types from './spotifyTypes'
import { TopObject } from './spotifyTypes'

const WEB_API_URI = 'https://api.spotify.com'

async function spotifyRequest<T>(
    authHeader: string,
    url: string,
    options = {},
) {
    return axios
        .get(WEB_API_URI + url, {
            params: options,
            headers: {
                Authorization: authHeader,
            },
        })
        .then((response) => {
            return response.data as T
        })
        .catch((error: AxiosError) => {
            console.error(error.response.data)
            throw new Error('Unauthorized')
        })
}

export function getProfile(authHeader: string): Promise<types.User> {
    const url = '/v1/me'
    return spotifyRequest<types.User>(authHeader, url)
}

type TimeRange = 'short_term' | 'medium_term' | 'long_term'

/**
 * Get top artists or tracks
 *
 * @param authHeader
 * @param type
 * @param limit
 * @param timeRange
 */
function getTop<T = types.Artist | types.Track>(
    authHeader: string,
    type: string,
    limit: number,
    timeRange: TimeRange,
): Promise<TopObject<T>> {
    const url = '/v1/me/top/' + type
    const options = {
        limit: limit,
        time_range: timeRange,
    }
    return spotifyRequest<TopObject<T>>(authHeader, url, options)
}

/**
 * Get top artists
 * @param authHeader
 * @param limit
 * @param timeRange
 */
export function getTopArtists<T = types.Artist>(
    authHeader: string,
    limit: number,
    timeRange: TimeRange,
): Promise<TopObject<T>> {
    return getTop<T>(authHeader, 'artists', limit, timeRange)
}

/**
 * Get top tracks
 * @param authHeader
 * @param limit
 * @param timeRange
 */
export function getTopTracks<T = types.Track>(
    authHeader: string,
    limit: number,
    timeRange: TimeRange,
): Promise<TopObject<T>> {
    return getTop<T>(authHeader, 'tracks', limit, timeRange)
}
