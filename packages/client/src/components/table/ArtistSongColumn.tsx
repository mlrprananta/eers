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
      <div className="font-weight-bold">{props.data.name}</div>
      {artists.map((artist, index) => (
        <span key={artist.name + index}>
          {artist.name + (index !== props.data.artists.length - 1 ? ', ' : '')}
        </span>
      ))}
    </td>
  )
}
