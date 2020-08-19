import React from 'react'
import { Artist } from '../data/types'
import styles from './Grid.module.css'
import { useMediaQuery } from 'react-responsive'

type Props = {
  artists: Artist[]
}

export const ArtistListExtended: React.FC<Props> = (props) => {
  const artists = props.artists
  const isMobileDevice = useMediaQuery({ query: '(max-width: 992px)' })

  return (
    <div
      className={styles['container' + (isMobileDevice ? '-horizontal' : '')]}
    >
      {artists.map((item, index) => {
        const image = item.images[1] ? item.images[1].url : ''
        const name = item.name
        return (
          <div key={item.id} className={styles.item}>
            <div className={styles['img-container']}>
              <a href={item.external_urls.spotify}>
                <img src={image} alt={name} className={styles['artist-img']} />
              </a>
            </div>
            <div
              className={`${styles.label} font-weight-normal text-truncate text-center`}
            >
              {name}
            </div>
          </div>
        )
      })}
    </div>
  )
}
