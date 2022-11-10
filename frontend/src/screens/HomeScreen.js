import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Card } from 'react-bootstrap'
import { listAllMessages, listAllTopics, listRooms } from '../actions/roomActions'
import Room from '../components/Room'
import Loader from '../components/Loader'
import Avatar from '@mui/material/Avatar';
import Message from '../components/Message'
import Chip from '@mui/material/Chip';

function HomeScreen() {

    const dispatch = useDispatch()

    const roomList = useSelector(state => state.roomList)
    const {loading, error, rooms} = roomList

    const allMessages = useSelector(state => state.allMessages)
    const {loading: loadingMessage, error: errorMessages, messages} = allMessages

    const allTopics = useSelector(state => state.allTopics)
    const {loading: loadingTopics, error: errorTopics, topics} = allTopics

    useEffect(() => {
        dispatch(listRooms())
        dispatch(listAllMessages())
        dispatch(listAllTopics())
    }, [dispatch])

  return (
    <div>
      <Row className='gap-5'>
            <Col md={8}>
            <Row>
              <Col>
                <h6>STUDY ROOMS</h6>
                <small>All the Rooms</small>
              </Col>
              <Col style={{textAlign: 'right'}}>
                <Button
                  style={{backgroundColor: '#46B5D1', color: 'black'}}
                  className='btn-md'>
                    <i className="fa-solid fa-plus"></i> Create Room
                </Button>
              </Col>
            </Row>
            <Row>
              <h6>Filters rooms by Topic:</h6>
              {topics.map(topic => (
                <Col md={2} sm={2} lg={2} key={topic.id}>
                  <Chip component={'span'} label={topic.name} variant="outlined" color="info" style={{backgroundColor: 'rgb(1, 15, 32)', color: '#46B5D1'}} />
                </Col>
              ))}
            </Row>
            <Row className='py-4'>
              {loading && <Loader />}
              {error && <Message severity='error' error={error}/>}
              {rooms.map(room => (
                <Col className='my-2' sm={6} key={room.id}>
                  <Room room={room} />
                </Col>
              ))}
            </Row>
          </Col>
        <Col style={{borderRadius: '20rem'}} md={3}>
          <Row style={{borderRadius: '.8rem'}} className='bg'>
            <span style={{backgroundColor: '#46B5D1', padding: '1rem', borderTopLeftRadius: '.8rem', borderTopRightRadius: '.8rem'}}>
              <h6>RECENT ACTIVITY</h6>
            </span>
            {messages.map(message => (
              <Card style={{backgroundColor: 'rgb(1, 15, 32)', border: '0.1px solid gray', width: '80%', margin: '.5rem auto'}} key={message.id}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', alignItems: 'center', padding: '5px'}}>
                    <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                    <small className='blue-txt'>@{message.user.name}</small>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', padding: '5px'}}>
                    {/* <small>{message.created.substring(0,10)}</small> */}
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <div>
                  <div style={{marginLeft: '2rem'}}>
                    <p>replied to post in "{message.room}"</p>
                  </div>
                  <div className='bg4 my-1' style={{marginLeft: '2rem', borderRadius: '3px'}}>
                    <p style={{padding: '1rem'}}>{message.body.substring(0,90)}...</p>
                  </div>
                </div>
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen
