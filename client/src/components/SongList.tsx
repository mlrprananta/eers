import React, { useEffect, useState, Fragment } from 'react'
import { Container, Image } from 'react-bootstrap'
import axios from 'axios'
import useAuth from '../hooks/useAuth'

const API_URI = 'https://api.spotify.com/v1/me/top/tracks'

//TODO Fix data types
//
export const SongList: React.FC = () => {
  const [tracks, setTracks] = useState([])
  const { token } = useAuth()

  useEffect(() => {
    axios
      .get(API_URI, {
        params: {
          time_range: 'short_term',
        },
        headers: {
          Authorization: 'Bearer ' + token.access_token,
        },
      })
      .then((res) => {
        console.log(res.data)
        setTracks(res.data.items)
      })
      .catch((err) => {})
  }, [])

  return (
    <Fragment>
      <h3>Last month's hits</h3>
      <div className="ram">
        {tracks.map((item) => {
          const image = item.album.images[0].url
          const artist = item.artists[0].name
          const track = item.name
          return (
            <div>
              <Image src={image} width="150px" height="150px" />
              <h6 className="truncate">{track}</h6>
              <span>{artist}</span>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
