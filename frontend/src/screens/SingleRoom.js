import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button  } from 'react-bootstrap'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createMessage, listRoomDetails } from '../actions/roomActions';
import Avatar from '@mui/material/Avatar';
import Loader from '../components/Loader'
import Message from '../components/Message'
import Chip from '@mui/material/Chip';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SendIcon from '@mui/icons-material/Send';

function SingleRoom() {

  const [post, setPost] = useState('')

  const params = useParams()
  const roomId = params.id

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const roomDetails = useSelector(state => state.roomDetails)
  const {loading, error, room} = roomDetails

  const messageCreate = useSelector(state => state.messageCreate)
  const {loading: loadingMessageCreate, error: errorMessageCreate, success: successMessageCreate} = messageCreate
  
  useEffect(() => {
    if(successMessageCreate) {
      setPost('')
    }
    dispatch(listRoomDetails(roomId))
  }, [dispatch, params.id, successMessageCreate])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(createMessage({
      id: params.id,
      post
    }))
  }

  return (
      <Row className='gap-5'>
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
                  <strong style={{color: '#46B5D1'}}>{room.name && room.name}</strong>
                  <p>{room.created && room.created.substring(0,10)}</p>
                </span>
                <span className='py-2'>
                  <small style={{fontSize: '.6rem'}}>HOSTED BY :</small>
                  <section style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                    
                    <small style={{color: '#46B5D1', padding: '5px'}}>@{room.host && room.host.name}</small>
                  </section>
                </span>
                <span className='py-2'>
                  <p>{room.description}</p>
                </span>
                <span className='py-2'>
                  <Chip label={room.topic && room.topic.name} variant="outlined" color="info" />
                </span>
                <Card style={{width: '96%', margin: 'auto'}} className='mt-3 bg3 mb-2'>
                    <span className='py-2'>
                      <strong>CONVERSATION</strong>
                    </span>
                    {room.messages && room.messages.map(message => (
                      <Row key={message.id} style={{borderLeft: '.1rem solid rgb(1, 15, 32)', marginLeft: '1rem'}} className='my-1'>
                        <span style={{display: 'flex'}} className='py-2'>
                          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                          <small style={{color: '#46B5D1', padding: '5px'}}>@{message.user.name}</small>
                          <small style={{padding: '5px'}}>{message.created && message.created.substring(0,10)}</small>
                        </span>
                        <span style={{marginLeft: '3rem'}} >
                          <p className='pl-3'>{message.body}</p>
                        </span>
                      </Row>
                    ))}

                    {!userInfo ? (
                      <span>
                        <Message sevrity='info' error='You need to be logged in to engage in this room' />
                      </span>
                    ) : (
                      <form onSubmit={submitHandler} className='post-holder'>
                        <input
                          className='post-input'
                          value={post}
                          onChange={(e) => setPost(e.target.value)}
                          placeholder='Write your post here...'
                          type='text'/>
                          <button
                            type='submit'>
                              <SendIcon style={{color: '#46B5D1'}} />
                          </button>
                      </form>
                    )}
                    
                </Card>
              </Row>
            </div>
          )}
        </Col>
        <Col md={3}>
          <Row style={{padding: '.5rem', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} className='bg2'>
                <h6><PeopleOutlineIcon /> PARTICIPANTS ({room.participants && room.participants.length})</h6>
          </Row>
          <Row className='bg'>
                {room.participants && room.participants.map(participant => (
                  <span style={{display: 'flex', alignItems: 'center', padding: '1rem'}} key={participant.id}>
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '3px' }} >
                      <small className='blue-txt'>@{participant.name}</small>
                      <small style={{fontSize: '10px'}} >{participant.username}</small>
                    </div>
                  </span>
                ))}
          </Row>
        </Col>
      </Row>
  )
}

export default SingleRoom
