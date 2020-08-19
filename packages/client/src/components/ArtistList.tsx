import React from 'react'
import { Artist } from '../data/types'

type Props = {
  artists: Artist[]
}

export const ArtistList: React.FC<Props> = (props) => {
  const artists = props.artists

  return (
    <div className="ram">
      {artists.map((item) => {
        const image = item.images[1] ? item.images[1].url : ''
        const name = item.name
        return (
          <div key={item.id} className="ram-container">
            <a href={item.external_urls.spotify}>
              <img src={image} alt={name} className="ram-img" />
            </a>

            {/* <div className="font-weight-normal artist-counter parent">
                {index + 1}
              </div> */}
            <div className="font-weight-light artist-name truncate">{name}</div>
          </div>
        )
      })}
      {/* <div className="ram-container">
        <img src={'filler.png'} alt="" className="ram-img"></img>
        <div className="ram-filler"></div>
      </div> */}
    </div>
  )
}
