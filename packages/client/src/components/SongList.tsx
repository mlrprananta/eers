import React from 'react'
import { Track } from '../data/types'
import styles from './Grid.module.css'
import { useMediaQuery } from 'react-responsive'

type Props = {
  tracks: Track[]
}

export const SongList: React.FC<Props> = (props) => {
  const tracks = props.tracks
  const isMobileDevice = useMediaQuery({ query: '(max-width: 576px)' })

  return (
    <div
      className={styles['container' + (isMobileDevice ? '-horizontal' : '')]}
    >
      {tracks.map((item, index) => {
        const album = item.album
        const images = album ? item.album.images : null
        const image = images ? images[0].url : ''
        const name = item.name
        const artists = item.artists
        return (
          <div key={item.id} className={styles.item}>
            <div className={styles['img-container']}>
              <a href={item.external_urls.spotify}>
                <img src={image} alt={name} className={styles['album-img']} />
              </a>
            </div>
            <a href={item.external_urls.spotify}>
              <div className={`${styles.label} font-weight-bold text-truncate`}>
                {name}
              </div>
            </a>

            {artists.map((artist, index) => (
              <span key={artist.name + index}>
                <a href={artist.external_urls.spotify}>{artist.name}</a>
                {index !== artists.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        )
      })}
    </div>
  )
}
