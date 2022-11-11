import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button, Form  } from 'react-bootstrap'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createMessage, createRoomReview, listRoomDetails } from '../actions/roomActions';
import Avatar from '@mui/material/Avatar';
import Loader from '../components/Loader'
import Message from '../components/Message'
import Chip from '@mui/material/Chip';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SendIcon from '@mui/icons-material/Send';
import Rating from '../components/Rating';

function SingleRoom() {

  const [post, setPost] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const params = useParams()
  const roomId = params.id

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const roomDetails = useSelector(state => state.roomDetails)
  const {loading, error, room} = roomDetails

  const messageCreate = useSelector(state => state.messageCreate)
  const {loading: loadingMessageCreate, error: errorMessageCreate, success: successMessageCreate} = messageCreate

  const roomCreateReview = useSelector(state => state.roomCreateReview)
  const {loading: loadingCreateReview, error: errorCreateReview, success: successCreateReview} = roomCreateReview
  
  useEffect(() => {
    if(successMessageCreate || successCreateReview) {
      setPost('')
      setRating(0)
      setComment('')
    }
    dispatch(listRoomDetails(roomId))
  }, [dispatch, params.id, successMessageCreate, successCreateReview])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(createMessage({
      id: params.id,
      post
    }))
  }

  const createReviewHandler = (e) => {
    e.preventDefault()

    dispatch(createRoomReview({
      id: params.id,
      rating, comment
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
          <Row style={{borderRadius: '20px'}} className='my-3'>
            <span style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} className='bg2 p-2'>
              <strong>WRITE A REVIEW</strong>
            </span>
            <span style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}} className='bg'>
                {userInfo ? (
                  
                  <Form onSubmit={createReviewHandler} className='p-3'>
                    {loadingCreateReview && <Loader/>}
                    {errorCreateReview && <Message severity='error' error={errorCreateReview} />}
                  <Form.Group controlId='rating'>
                    <Row>
                      <Col md={4}><Form.Label>Rating</Form.Label></Col>
                      <Col md={8}>
                        <Form.Control
                                as='select'
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                >
                                  <option value=''>Select...</option>
                                  <option value='1'>1 - Poor</option>
                                  <option value='2'>2 - Fair</option>
                                  <option value='3'>3 - Good</option>
                                  <option value='4'>4 - Very Good</option>
                                  <option value='5'>5 - Excellent</option>
                              </Form.Control>
                              </Col>
                              </Row>
                    </Form.Group>

                    <Form.Group className='mt-2' controlId='comment'>
                              <Row>
                                <Col md={4}>
                                <Form.Label>Review</Form.Label>
                                </Col>
                                <Col md={8}>
                                  <Form.Control
                                    as='textarea'
                                    row='5'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    >

                                  </Form.Control>
                                </Col>
                              </Row>
                            </Form.Group>

                            <Button
                                // disabled={loadingProductReview}
                                type='submit'
                                style={{width: '100%', backgroundColor:'#46B5D1', color:'white'}}
                                className='bg2 btn-small my-2'
                                >
                                  Review
                              </Button>
                </Form>
                ) : (
                  <Message severity='info' error='You need to be logged in in order to write a review' />
                )}
            </span>
          </Row>

          <Row>
            <span style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} className='bg2 p-2'>
              <strong>REVIEWs</strong>
            </span>
            <section className='bg'>
              {room.reviews && room.reviews.map(review => (
                <Card style={{border:'1px solid grey', width:'90%', backgroundColor:'rgb(1, 15, 32)', lineHeight:'1rem'}} className='mx-2 my-2'>
                  <span className='ml-2 p-2'>
                    <strong className='blue-txt'>@{review.name}</strong>
                    <Rating value={review.rating} color={'#f8e825'}/>
                    <small>{review.created.substring(0,10)}</small>
                    <p>{review.comment}</p>
                  </span>
                </Card>
              ))}
            </section>
          </Row>
        </Col>
      </Row>
  )
}

export default SingleRoom
