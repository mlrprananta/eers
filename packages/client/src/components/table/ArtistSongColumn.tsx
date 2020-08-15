import React, { PropsWithChildren, ReactElement } from 'react'
import { Track } from '../../data/types'

interface Props {
  data: Track
}

export function ArtistSongColumn(
  props: PropsWithChildren<Props>,
): ReactElement<PropsWithChildren<Props>> {
  const artists = props.data.artists || []

  return (
    <td>
      <div>
        <a className="font-weight-bold" href={props.data.external_urls.spotify}>
          {props.data.name}
        </a>
      </div>

      {artists.map((artist, index) => (
        <span key={artist.name + index}>
          <a href={artist.external_urls.spotify}>{artist.name}</a>
          {index !== props.data.artists.length - 1 ? ', ' : ''}
        </span>
      ))}
    </td>
  )
}
