import React, { useEffect, useState, Fragment } from 'react'
import { Container, Image } from 'react-bootstrap'
import axios from 'axios'
import useAuth from '../hooks/useAuth'

const API_URI = 'https://api.spotify.com/v1/me/top/artists'

//TODO Fix data types
//
export const ArtistList: React.FC = () => {
  const [artists, setArtists] = useState([])
  const { token } = useAuth()

  useEffect(() => {
    axios
      .get(API_URI, {
        params: {
          limit: 10,
          time_range: 'medium_term',
        },
        headers: {
          Authorization: 'Bearer ' + token.access_token,
        },
      })
      .then((res) => {
        console.log(res.data)
        setArtists(res.data.items)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <Fragment>
      <h3>Your favorite artists</h3>
      <div className="ram">
        {artists.map((item) => {
          const image = item.images[0] ? item.images[0].url : ''
          const artist = item.name
          return (
            <div key={item.id}>
              <Image src={image} fluid roundedCircle />
              <p className="text-center font-weight-light">{artist}</p>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
