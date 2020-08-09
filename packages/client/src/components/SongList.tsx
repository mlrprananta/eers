import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'
import { Track } from '../data/types'
import { useApiRequest } from '../hooks/useSpotifyWebApi'

//TODO Fix data types
//
export const SongList: React.FC = () => {
  const tracks = useApiRequest<{ items: Track[] }>('/me/top/tracks', {
    limit: 50,
    time_range: 'short_term',
  })

  return (
    <Fragment>
      <h3>Last month's hits</h3>
      <div className="ram">
        {tracks
          ? tracks.items.map((item) => {
              const image = item.album.images ? item.album.images[0].url : ''
              const track = item.name
              return (
                <div key={item.id}>
                  <Image src={image} thumbnail />
                  <span className="font-weight-light truncate">{track}</span>
                  {/* <span className="font-weight-light">{artist}</span> */}
                </div>
              )
            })
          : null}
      </div>
    </Fragment>
  )
}
