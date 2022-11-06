import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listRooms } from '../actions/roomActions'

function HomeScreen() {

    const roomList = useSelector(state => state.roomList)
    const {loading, error, rooms} = roomList
    console.log(rooms)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listRooms())
    }, [dispatch])

  return (
    <div>
      <h3>STUDY ROOMS</h3>
    </div>
  )
}

export default HomeScreen
