import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Rating from './Rating';

function Room({room}) {
  return (
      <Card style={{backgroundColor: 'rgb(1, 15, 32)', }}>
        <Card.Body>
          <Row className='pt-2 pb-4'>
            <Col style={{display: 'flex',justifyContent: 'spaceBetween', alignItems: 'center', color: '#46B5D1'}}>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
              <small style={{marginLeft: '4px'}}>@{room.host.username}</small>
            </Col>
            <Col style={{display: 'flex',justifyContent: 'spaceAround', alignItems: 'center'}} >
              <small style={{marginLeft: '7rem'}}>{room.created.substring(0,10)}</small>
              <Link to={`/room/${room.id}`} style={{marginLeft: '.5rem'}}><i className="fa-solid fa-ellipsis-vertical"></i></Link>
            </Col>
          </Row>
          <Link to={`room/${room.id}`}>
            <Card.Title>
              {room.name}
            </Card.Title>
          </Link>
          <Card.Text>
            <Chip label={room.topic.name} variant="outlined" color="primary" />
          </Card.Text>
          <Card.Text as='div'>
            <div className='my-3'>
                <Rating value={room.rating} text={`${room.numReviews} reviews`} color={'#f8e825'}/>
            </div>
        </Card.Text>
        <hr style={{height: '1px', backgroundColor: 'white', color: 'white'}} />
        <Card.Text as='div'>
            <PeopleOutlineIcon /> {room.participants.length} joined
        </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Room
