import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'
import { Artist } from '../data/types'

type Props = {
  artists: Artist[]
}

//TODO Fix data types
export const ArtistList: React.FC<Props> = (props) => {
  // const artists = useApiRequest<{ items: Artist[] }>(Endpoint.TopArtists, {
  //   limit: 10,
  //   time_range: 'medium_term',
  // })?.items
  const artists = props.artists

  return (
    <Fragment>
      <div className="ram">
        {artists.map((item) => {
          const image = item.images[0] ? item.images[0].url : ''
          const artist = item.name
          return (
            <div key={item.id}>
              <Image src={image} fluid roundedCircle />
              <p className="text-center font-weight-light">{artist}</p>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
