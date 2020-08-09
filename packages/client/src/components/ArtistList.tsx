import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'
import { Endpoint } from '../api/endpoints'
import { Artist } from '../data/types'
import { useApiRequest } from '../hooks/useSpotifyWebApi'

//TODO Fix data types
export const ArtistList: React.FC = () => {
  const artists = useApiRequest<{ items: Artist[] }>(Endpoint.TopArtists, {
    limit: 10,
    time_range: 'medium_term',
  })?.items

  return (
    <Fragment>
      <div className="ram">
        {artists
          ? artists.map((item) => {
              const image = item.images[0] ? item.images[0].url : ''
              const artist = item.name
              return (
                <div key={item.id}>
                  <Image src={image} fluid roundedCircle />
                  <p className="text-center font-weight-light">{artist}</p>
                </div>
              )
            })
          : null}
      </div>
    </Fragment>
  )
}
