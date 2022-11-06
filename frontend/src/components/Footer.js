import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg footer'>
      <Container>
        <Row>
            <Col className='text-center py-3 white-text'>
                Copyright &copy; Estudiar
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
