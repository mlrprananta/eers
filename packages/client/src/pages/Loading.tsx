import React from 'react'

import { Spinner } from 'react-bootstrap'

export const Loading: React.FC = (props) => {
  return (
    <div className="parent full">
      <Spinner animation="border" variant="primary" />
    </div>
  )
}
