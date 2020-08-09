import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import { SongTable } from '../components/table/SongTable'
import { Endpoint } from '../api/endpoints'

const tabs = [
  {
    title: 'Monthly',
    range: 'short',
  },
  {
    title: 'Yearly',
    range: 'medium',
  },
  {
    title: 'All',
    range: 'long',
  },
]

export const Tracks: React.FC = () => {
  return (
    <Container fluid>
      <Tabs defaultActiveKey="Monthly" id="uncontrolled-tab-example">
        {tabs.map((tab, index) => (
          <Tab eventKey={tab.title} title={tab.title} key={tab.title + index}>
            <SongTable
              endpoint={Endpoint.TopTracks}
              options={{
                limit: 50,
                time_range: tab.range + '_term',
              }}
            />
          </Tab>
        ))}

        {/* <Tab eventKey="recently" title="Recently">
          <h2>Recently played</h2>
          <SongTable
            endpoint={Endpoint.RecentlyPlayed}
            options={{
              limit: 50,
            }}
          />
        </Tab> */}
        {/* <Tab eventKey="yearly" title="Yearly">
          <SongTable
            endpoint={Endpoint.TopTracks}
            options={{
              limit: 50,
              time_range: 'medium_term',
            }}
          />
        </Tab>
        <Tab eventKey="allTime" title="All">
          <SongTable
            endpoint={Endpoint.TopTracks}
            options={{
              limit: 50,
              time_range: 'long_term',
            }}
          />
        </Tab> */}
      </Tabs>
    </Container>
  )
}
