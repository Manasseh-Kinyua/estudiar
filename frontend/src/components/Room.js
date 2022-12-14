import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Rating from './Rating';
import { useSelector } from 'react-redux'

function Room({room}) {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  return (
      <Card style={{backgroundColor: 'rgb(1, 15, 32)', }}>
        <Card.Body>
          <Row className='pt-2 pb-4'>
            <Col style={{display: 'flex',justifyContent: 'spaceBetween', alignItems: 'center', color: '#46B5D1'}}>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
              <small style={{marginLeft: '4px'}}>@{room.host.name}</small>
            </Col>
            <Col style={{display: 'flex',justifyContent: 'spaceAround', alignItems: 'center'}} >
              <small style={{marginLeft: '7rem'}}>{room.created.substring(0,10)}</small>
              <Link to={`/room/${room.id}`} style={{marginLeft: '.5rem'}}><i className="fa-solid fa-ellipsis-vertical"></i></Link>
            </Col>
          </Row>
          <Link to={`/room/${room.id}`}>
            <Card.Title>
              {room.name}
            </Card.Title>
          </Link>
          <Card.Text>
            <Chip component={'span'} label={room.topic.name} variant="outlined" color="info" />
          </Card.Text>
          <Card.Text as='div'>
            <div className='my-3'>
                <Rating value={room.rating} text={`${room.numReviews} reviews`} color={'#f8e825'}/>
            </div>
        </Card.Text>
        <hr style={{height: '1px', backgroundColor: 'white', color: 'white'}} />
        <Card.Text style={{display:'flex', justifyContent:'space-between'}} as='div'>
            <span>
              <PeopleOutlineIcon /> {room.participants.length} joined
            </span>
            {userInfo && userInfo.name == room.host.name && (
              <span>
              <Link to={`/room/edit/${room.id}`} className='mx-3'>
                <EditIcon />
              </Link>
              <DeleteIcon />
            </span>
            )}
        </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Room
