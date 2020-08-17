import React from 'react'
import { Artist } from '../data/types'
import styles from './ArtistList.module.css'

type Props = {
  artists: Artist[]
}

export const ArtistListExtended: React.FC<Props> = (props) => {
  const artists = props.artists

  return (
    <div className={styles.container}>
      {artists.map((item, index) => {
        const image = item.images[1] ? item.images[1].url : ''
        const name = item.name
        return (
          <div
            key={item.id}
            className={styles.item}
            style={{
              marginBottom: '1rem',
            }}
          >
            <div className={styles['img-container']}>
              <a href={item.external_urls.spotify}>
                <img src={image} alt={name} className={styles.img} />
              </a>
            </div>

            {/* <div className="font-weight-normal artist-counter parent">
                {index + 1}
              </div> */}
            <div className={`${styles.label} font-weight-light text-truncate`}>
              {name}
            </div>
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
