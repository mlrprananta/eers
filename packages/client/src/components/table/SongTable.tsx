import React from 'react'
import { Track } from '../../data/types'
import { GenericTable, Body, Row } from '.'
import { AlbumArtColumn } from './AlbumArtColumn'
import { ArtistSongColumn } from './ArtistSongColumn'
import { Container, Row as BRow } from 'react-bootstrap'

interface Props {
  // endpoint: Endpoint.RecentlyPlayed | Endpoint.TopTracks
  // options: object
  tracks: Track[]
}

export const SongTable: React.FC<Props> = (props) => {
  const tracks = props.tracks

  // const tracks = useApiRequest<{ items: Track[] }>(
  //   props.endpoint,
  //   props.options,
  // ) || { items: [] }

  return (
    <Container fluid>
      <BRow className="auto">
        <GenericTable>
          {/* <thead>
        <th></th>
        <th>Track</th>
        <th>Artist</th>
      </thead> */}
          <Body>
            {tracks.map((track, index) => (
              <Row key={track.name + index}>
                <td>{index + 1}</td>
                <AlbumArtColumn track={track} />
                <ArtistSongColumn data={track} />
                {/* <Column data={track} dataKey={'name'} />
            <ArtistColumn data={track}></ArtistColumn> */}
              </Row>
            ))}
          </Body>
        </GenericTable>
      </BRow>
    </Container>
  )
}
