import React, { useEffect } from 'react'
import { Row, Col, Card  } from 'react-bootstrap'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { listRoomDetails } from '../actions/roomActions';
import Avatar from '@mui/material/Avatar';
import Loader from '../components/Loader'
import Message from '../components/Message'
import Chip from '@mui/material/Chip';

function SingleRoom() {

  const params = useParams()
  const roomId = params.id
  console.log(roomId)

  const dispatch = useDispatch()

  const roomDetails = useSelector(state => state.roomDetails)
  const {loading, error, room} = roomDetails
  
  console.log(room)

  useEffect(() => {
    dispatch(listRoomDetails(params.id))
  }, [dispatch, params.id])
  console.log(room)

  return (
      <Row className='gap-2'>
        <Col  md={8}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message severity='error' error={error} />
          ) : (
            <div>
              <Row style={{padding: '.5rem', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} className='bg2'>
                <Col md={1}><Link to='/'><KeyboardBackspaceIcon color='primary' /></Link></Col>
                <Col md={10}>
                  <h6>STUDY ROOM</h6>
                </Col>
                <Col md={1}>
                <Link to='/' style={{justifyContent: 'right'}}><i className="fa-solid fa-ellipsis-vertical"></i></Link>
                </Col>
              </Row>
              <Row className='bg'>
                <span style={{display: 'flex', justifyContent : 'space-between'}} className='py-2'>
                  <strong style={{color: '#46B5D1'}}>{room.name}</strong>
                  <p>{room.created.substring(0,10)}</p>
                </span>
                <span className='py-2'>
                  <small style={{fontSize: '.6rem'}}>HOSTED BY :</small>
                  <section style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                    <small style={{color: '#46B5D1', padding: '5px'}}>@{room.host.username}</small>
                  </section>
                </span>
                <span className='py-2'>
                  <p>{room.description}</p>
                </span>
                <span className='py-2'>
                  <Chip label={room.topic.name} variant="outlined" color="info" />
                </span>
                <Card style={{width: '96%', margin: 'auto'}} className='mt-3 bg3 mb-2'>
                    <span className='py-2'>
                      <strong>CONVERSATION</strong>
                    </span>
                    {room.messages.map(message => (
                      <Row style={{borderLeft: '.1rem solid rgb(1, 15, 32)', marginLeft: '1rem'}} className='my-1'>
                        <span style={{display: 'flex'}} className='py-2'>
                          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                          <small style={{color: '#46B5D1', padding: '5px'}}>@{message.user.username}</small>
                          <small style={{padding: '5px'}}>{message.created.substring(0,10)}</small>
                        </span>
                        <span style={{marginLeft: '3rem'}} >
                          <p className='pl-3'>{message.body}</p>
                        </span>
                      </Row>
                    ))}
                    
                </Card>
              </Row>
            </div>
          )}
        </Col>
        <Col md={3}>
          <Row style={{padding: '.5rem', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} className='bg2'>
                <h6>PARTICIPANTS</h6>
          </Row>
        </Col>
      </Row>
  )
}

export default SingleRoom
