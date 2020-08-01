import React, { PropsWithChildren, ReactElement } from 'react'
import { Image } from 'react-bootstrap'
import { Track } from '../../data/types'

interface Props {
  track: Track
}

export function AlbumArtColumn(
  props: PropsWithChildren<Props>,
): ReactElement<PropsWithChildren<Props>> {
  const album = props.track.album
  const images = album ? props.track.album.images : null
  const image = images ? images[0].url : ''
  return (
    <td>
      <Image src={image} width={96} height={96} />
    </td>
  )
}
