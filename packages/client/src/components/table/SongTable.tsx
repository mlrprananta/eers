import React from 'react'
import { Track } from '../../data/types'
import { GenericTable, Body, Row } from '.'
import { AlbumArtColumn } from './AlbumArtColumn'
import { ArtistSongColumn } from './ArtistSongColumn'
import { Container, Row as BRow } from 'react-bootstrap'

interface Props {
  tracks: Track[]
}

export const SongTable: React.FC<Props> = (props) => {
  const tracks = props.tracks

  return (
    <Container fluid>
      <BRow className="auto">
        <GenericTable>
          <Body>
            {tracks.map((track, index) => (
              <Row key={track.name + index}>
                <td>{index + 1}</td>
                <AlbumArtColumn track={track} />
                <ArtistSongColumn data={track} />
              </Row>
            ))}
          </Body>
        </GenericTable>
      </BRow>
    </Container>
  )
}
