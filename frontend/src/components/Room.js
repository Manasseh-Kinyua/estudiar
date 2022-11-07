import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';

function Room({room}) {
  return (
      <Card style={{backgroundColor: 'rgb(1, 15, 32)', }}>
        <Card.Body>
          <Row>
            <Col style={{display: 'flex',justifyContent: 'spaceBetween', alignItems: 'center', color: '#46B5D1'}}>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
              <small style={{marginLeft: '4px'}}>@{room.host}</small>
            </Col>
            <Col >
              <small>{room.created.substring(0,8)}</small>
            </Col>
          </Row>
          <Link to={`room/${room.id}`}>
            <Card.Title>
              {room.name}
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
  )
}

export default Room
