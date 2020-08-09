import React from 'react'
import { Track } from '../../data/types'
import { useApiRequest } from '../../hooks/useSpotifyWebApi'
import { GenericTable, Column, Body, Row } from '.'
import { AlbumArtColumn } from './AlbumArtColumn'
import { ArtistColumn } from './ArtistColumn'
import { Endpoint } from '../../api/endpoints'

interface Props {
  endpoint: Endpoint.RecentlyPlayed | Endpoint.TopTracks
  options: object
}

export const SongTable: React.FC<Props> = (props) => {
  const tracks = useApiRequest<{ items: Track[] }>(
    props.endpoint,
    props.options,
  ) || { items: [] }

  return (
    <GenericTable>
      {/* <thead>
        <th></th>
        <th>Track</th>
        <th>Artist</th>
      </thead> */}
      <Body>
        {tracks.items.map((track, index) => (
          <Row key={track.name + index}>
            <AlbumArtColumn track={track} />
            <Column data={track} dataKey={'name'} />
            <ArtistColumn data={track}></ArtistColumn>
          </Row>
        ))}
      </Body>
    </GenericTable>
  )
}
