import React, { Fragment, useRef } from 'react'
import { Image } from 'react-bootstrap'
import { Artist } from '../data/types'

type Props = {
  artists: Artist[]
}

export const ArtistList: React.FC<Props> = (props) => {
  const artists = props.artists

  return (
    <Fragment>
      <div className="ram">
        {artists.map((item, index) => {
          const image = item.images[0] ? item.images[0].url : ''
          const artist = item.name
          return (
            <div key={item.id} className="ram-container">
              <img src={image} alt={artist} className="ram-img"></img>
              <div className="font-weight-normal artist-counter parent">
                {index + 1}
              </div>
              <div className="font-weight-light artist-name truncate">
                {artist}
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
