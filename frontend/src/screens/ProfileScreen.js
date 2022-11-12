import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Room from '../components/Room'
import { getUserProfile } from '../actions/userActions'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

function ProfileScreen() {

    const dispatch = useDispatch()

    const userProfile = useSelector(state => state.userProfile)
    const {loading, error, user} = userProfile
    console.log(user)

    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch])

  return (
    <div>
      <Row>
        <Col md={7}>
          {loading && <Loader/>}
          {error && <Message severity='error' error={error} />}
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <Avatar sx={{ width: 70, height: 70 }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
              <h5 className='blue-txt'>@{user && user.name}</h5>
              <p>@{user && user.username}</p>
                <Chip component={'span'} label={user && user.name} variant="outlined" color="info" />
            </div>
            <Row className='gap-1 my-5'>
              <h6>ROOMS HOSTED</h6>
              {user && user.rooms.map(room => (
                <Col key={room.id} md={5}>
                  <Room room={room} />
                </Col>
              ))}
            </Row>
        </Col>
        <Col md={3}>
        <Row style={{borderRadius: '.8rem'}} className='bg'>
            <span style={{backgroundColor: '#46B5D1', padding: '1rem', borderTopLeftRadius: '.8rem', borderTopRightRadius: '.8rem'}}>
              <h6>RECENT ACTIVITY</h6>
            </span>
            {user && user.messages.map(message => (
              <Card style={{backgroundColor: 'rgb(1, 15, 32)', border: '0.1px solid gray', width: '80%', margin: '.5rem auto'}} key={message.id}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', alignItems: 'center', padding: '5px'}}>
                    <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                    <small className='blue-txt'>@{user.name}</small>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', padding: '5px'}}>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <div>
                  <div style={{marginLeft: '2rem'}}>
                    <p>replied to post a in " {message.room.name} "</p>
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

export default ProfileScreen
