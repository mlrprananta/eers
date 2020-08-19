import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

type Props = {
  name: string
  id: string
  toggle?: () => void
  share?: (id: string) => void
}

export const ProfileSummary: React.FC<Props> = (props) => {
  const handleClick = () => {
    if (props.toggle) {
      if (props.share && navigator.share !== undefined) {
        props.share(props.id)
        return
      }
      console.log('toggled')
      props.toggle()
      return
    }
  }

  return (
    <Card className="border-0 bg-transparent">
      <Card.Body>
        <Row>
          <Col className="col-auto">
            <img
              src={'/unnamed.png'}
              alt={'profile'}
              className={'rounded-circle shadow-sm'}
              style={{
                width: '7rem',
                height: '7rem',
              }}
            ></img>
          </Col>
          <Col>
            <Card.Title as={'h4'}>{props.name}</Card.Title>
            <Card.Subtitle as={'h6'} className="text-muted">
              0 followers{' · '}0 following
            </Card.Subtitle>
            <hr />
            {props.toggle !== undefined ? (
              <Button variant="primary" onClick={() => handleClick()}>
                Share <i className="fas fa-share-alt"></i>
              </Button>
            ) : (
              <Button variant="primary" disabled>
                Follow <i className="fas fa-user-plus"></i>
              </Button>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
