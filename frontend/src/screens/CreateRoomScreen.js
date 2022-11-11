import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Card, Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { createRoom } from '../actions/roomActions'
import { useNavigate } from 'react-router-dom'
import { ROOM_CREATE_RESET } from '../constants/roomConstants'

function CreateRoomScreen() {

    const [name, setName] = useState('')
    const [topic, setTopic] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const roomCreate = useSelector(state => state.roomCreate)
    const {loading, success, error} = roomCreate

    useEffect(() => {
        if(success) {
            navigate('/')
            dispatch({type: ROOM_CREATE_RESET})
        }
    }, [navigate, success])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(createRoom({
            name, topic, description
        }))
    }

  return (
    <div className='py-5'>
      <Row className="justify-content-md-center my-5">
        
        <Col md={4}>
            
            <Card style={{backgroundColor: 'rgb(1, 15, 32)', borderRadius: '1rem'}}>
                <div className='bg2' style={{textAlign: 'center', padding: '.8rem', color: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}>
                <h6>CREATE ROOM</h6>
                </div>
                {loading && <Loader />}
                {error && <Message severity='error' error={error} />}
              <Form className='form-p' onSubmit={submitHandler}>
                <Form.Group className='form-m' controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Enter room name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}>

                  </Form.Control>
                </Form.Group>
                <Form.Group className='form-m' controlId='topic'>
                  <Form.Label>Topic</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Enter room topic'
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}>

                  </Form.Control>
                </Form.Group>
                <Form.Group className='form-m' controlId='description'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    required
                    placeholder='Enter room description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>

                  </Form.Control>
                </Form.Group>
                <span style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Button
                    type='submit'
                    style={{backgroundColor: '#46B5D1', color: 'white', width: '60%', marginTop: '1.5rem'}}>
                    Create Room
                  </Button>
                </span>
              </Form>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CreateRoomScreen
