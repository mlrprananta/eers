import React, { useState, useRef } from 'react'
import { Modal, Button, ModalProps, Form, Col } from 'react-bootstrap'

interface Props extends ModalProps {
  id: string
}

export const ShareModal: React.FC<Props> = ({ id, ...props }) => {
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  function handleClick() {
    ref.current?.select()
    document.execCommand('copy')
    setCopied(true)
  }

  return (
    <Modal {...props} centered onExited={() => setCopied(false)}>
      <Modal.Header>
        <Modal.Title>Share this page</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Col className="ml-auto">
              <Form.Control
                ref={ref}
                readOnly
                value={'https://eers.herokuapp.com/user/' + id}
              ></Form.Control>
            </Col>
            <Col className="col-auto">
              <Button onClick={handleClick}>
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
