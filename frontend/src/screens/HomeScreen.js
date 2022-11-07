import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { listRooms } from '../actions/roomActions'
import Room from '../components/Room'

function HomeScreen() {

    const dispatch = useDispatch()

    const roomList = useSelector(state => state.roomList)
    const {loading, error, rooms} = roomList
    console.log(rooms)

    useEffect(() => {
        dispatch(listRooms())
    }, [dispatch])

  return (
    <div>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <h6>STUDY ROOMS</h6>
              <small>All the Rooms</small>
            </Col>
            <Col className='text-right'>
              <Button
                style={{backgroundColor: '#46B5D1', color: 'black'}}
                className='btn-md'>
                  <i className="fa-solid fa-plus"></i> Create Room
              </Button>
            </Col>
          </Row>
          <Row className='py-4'>
            {rooms.map(room => (
              <Col sm={6} key={room.id}>
                <Room room={room} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <h6>RECENT ACTIVITY</h6>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen
