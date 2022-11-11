import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Card, Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { editRoom, listRoomDetails } from '../actions/roomActions'
import { useNavigate, useParams } from 'react-router-dom'
import { ROOM_DETAIL_RESET, ROOM_EDIT_RESET } from '../constants/roomConstants'

function EditRoomScreen() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const params = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const roomDetails = useSelector(state => state.roomDetails)
    const {loading, room, error} = roomDetails

    const roomEdit = useSelector(state => state.roomEdit)
    const {loading: loadingEdit, success: successEdit, error: errorEdit} = roomEdit

    useEffect(() => {
        
        if(successEdit) {
            navigate('/')
            dispatch({type: ROOM_EDIT_RESET})
        } else {
            if(!room || !room.name || room.id !== Number(params.id)) {
              dispatch(listRoomDetails(params.id))
            } else {
              setName(room.name && room.name)
              setDescription(room.description && room.description)
            }
            
        }
    }, [navigate, successEdit, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(editRoom({
            id: params.id,
            name, description
        }))
    }

  return (
    <div className='py-5'>
      <Row className="justify-content-md-center my-5">
        
        <Col md={4}>
            
            <Card style={{backgroundColor: 'rgb(1, 15, 32)', borderRadius: '1rem'}}>
                <div className='bg2' style={{textAlign: 'center', padding: '.8rem', color: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}>
                <h6>EDIT ROOM</h6>
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
                    Edit Room
                  </Button>
                </span>
              </Form>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default EditRoomScreen
